'use client';
import { useState, type FormEvent } from 'react';
export function WaitlistForm() {
  const [status, setStatus] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true); setStatus('Please enter a valid email address.');
      form.querySelector<HTMLInputElement>('#email')?.focus(); return;
    }
    setPending(true); setError(false); setStatus('');
    try {
      const response = await fetch('/api/waitlist/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, company: data.get('company'), role: data.get('role'), website: data.get('website') }) });
      if (!response.ok) throw new Error('Could not save signup');
      setStatus('Thanks — you’re on the list.'); form.reset();
    } catch { setError(true); setStatus('Something went wrong. Please try again.'); }
    finally { setPending(false); }
  }
return (<form id="waitlist-form" onSubmit={submit} noValidate aria-busy={pending}>
  <div className="field">
    <label className="label" htmlFor="email">Work email</label>
    <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
  </div>
  <div className="field">
    <label className="label" htmlFor="company">Company</label>
    <input id="company" name="company" type="text" autoComplete="organization" placeholder="Company name" />
  </div>
  <div className="field">
    <label className="label" htmlFor="role">I’m with</label>
    <select id="role" name="role">
      <option value="agency">An agency</option>
      <option value="brand">A brand</option>
      <option value="publisher">A publisher</option>
      <option value="developer">A developer</option>
      <option value="adtech">An adtech team</option>
      <option value="other">Something else</option>
    </select>
  </div>
  <div hidden aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
  <button className="btn" type="submit" disabled={pending}>{pending ? "Joining…" : "Join the waitlist"}</button>
  <p className="form-status" id="form-status" role="status" aria-live="polite" style={{ color: error ? "var(--hl-amber)" : undefined }}>{status}</p>
</form>);
}
