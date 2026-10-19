// Bounded, per-instance abuse guard. Configure Vercel WAF for a global limit.
const attempts = new Map<string, { count: number; expires: number }>();
export function allowAttempt(ip: string, now = Date.now()) {
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  const current = attempts.get(ip);
  if (current) { current.count += 1; return current.count <= 5; }
  if (attempts.size >= 5000) return false;
  attempts.set(ip, { count: 1, expires: now + 60_000 });
  return true;
}
