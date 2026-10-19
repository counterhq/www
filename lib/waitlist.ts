import { z } from 'zod';
export const signupSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(254),
  company: z.string().trim().max(200).default(''),
  role: z.enum(['agency', 'brand', 'publisher', 'developer', 'adtech', 'other']),
  website: z.string().max(200).default(''),
});
export type Signup = z.infer<typeof signupSchema>;
type Env = Record<string, string | undefined>;
export async function saveSignup(signup: Signup, env: Env = process.env, request: typeof fetch = fetch) {
  if (!env.ATTIO_API_KEY || !env.ATTIO_WAITLIST_LIST_ID) throw new Error('Attio is not configured');
  async function attio(path: string, method: string, body: unknown) {
    const response = await request(`https://api.attio.com/v2/${path}`, {
      method, headers: { Authorization: `Bearer ${env.ATTIO_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body), signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Attio request failed (${response.status})`);
    return response.json();
  }
  // Find first so a signup never overwrites an existing person's other email addresses.
  const query = () => attio('objects/people/records/query', 'POST', { filter: { email_addresses: { email_address: { $eq: signup.email } } }, limit: 1 });
  let person = (await query()).data[0];
  if (!person) {
    try { person = (await attio('objects/people/records', 'POST', { data: { values: { email_addresses: [signup.email] } } })).data; }
    catch (error) {
      // Another simultaneous request may have created this person.
      person = (await query()).data[0];
      if (!person) throw error;
    }
  }
  const entry = await attio(`lists/${encodeURIComponent(env.ATTIO_WAITLIST_LIST_ID)}/entries`, 'PUT', {
    data: { parent_record_id: person.id.record_id, parent_object: 'people', entry_values: {
      signup_company: signup.company ? [{ value: signup.company }] : [], signup_role: [{ value: signup.role }],
    } },
  });
  if (!entry.data?.id?.entry_id) throw new Error('Attio did not confirm the list entry');
  return entry.data.id.entry_id as string;
}
export async function notifySignup(signup: Signup, entryId: string, env: Env = process.env, request: typeof fetch = fetch) {
  if (!env.RESEND_API_KEY || !env.WAITLIST_EMAIL_FROM || !env.WAITLIST_EMAIL_TO) throw new Error('Resend is not configured');
  const response = await request('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `waitlist/${entryId}` },
    body: JSON.stringify({ from: env.WAITLIST_EMAIL_FROM, to: [env.WAITLIST_EMAIL_TO], subject: 'New Counter waitlist signup', text: `Email: ${signup.email}\nCompany: ${signup.company || 'Not provided'}\nRole: ${signup.role}\n\nSaved to the Counter waitlist in Attio.` }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Resend request failed (${response.status})`);
}
