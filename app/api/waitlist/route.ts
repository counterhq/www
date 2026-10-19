import { after } from 'next/server';
import { signupSchema, saveSignup, notifySignup } from '@/lib/waitlist';
import { allowAttempt } from '@/lib/rate-limit';
export const runtime = 'nodejs';
export const maxDuration = 60;
const reply = (status: number, error?: string) => Response.json(error ? { error } : { ok: true }, { status, headers: { 'Cache-Control': 'no-store' } });
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return reply(403, 'Invalid origin');
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'JSON required');
  // Enforce the limit while streaming, even if Content-Length is absent or forged.
  const reader = request.body?.getReader();
  if (!reader) return reply(400, 'Invalid submission');
  const chunks: Uint8Array[] = []; let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > 4096) { await reader.cancel(); return reply(413, 'Submission too large'); }
    chunks.push(value);
  }
  let input: unknown;
  try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return reply(400, 'Invalid JSON'); }
  const parsed = signupSchema.safeParse(input);
  if (!parsed.success) return reply(400, 'Please check your details');
  if (parsed.data.website) return reply(400, 'Invalid submission');
  // Vercel overwrites this header at its proxy; do not trust arbitrary forwarded headers.
  const ip = process.env.VERCEL ? request.headers.get('x-vercel-forwarded-for') : 'local';
  if (!allowAttempt(ip || 'unknown')) return reply(429, 'Please try again later');
  try {
    const entryId = await saveSignup(parsed.data);
    after(async () => {
      try { await notifySignup(parsed.data, entryId); }
      catch { console.error('waitlist_notification_failed'); }
    });
    return reply(200);
  } catch {
    console.error('waitlist_save_failed');
    return reply(503, 'Unable to save your signup. Please try again.');
  }
}
