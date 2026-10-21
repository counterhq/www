'use client';
import { useEffect, useState } from 'react';
import './cookie-notice.css';
// Shown once per visitor for a few seconds, then slides away. Storage can be unavailable, so it fails quietly.
const KEY = 'counter-cookie-notice';
export function CookieNotice() {
  const [state, setState] = useState<'hidden' | 'shown' | 'leaving'>('hidden');
  function dismiss() {
    try { localStorage.setItem(KEY, '1'); } catch {}
    setState('leaving');
  }
  useEffect(() => {
    try { if (localStorage.getItem(KEY)) return; } catch {}
    setState('shown');
    const t = setTimeout(dismiss, 3000);
    return () => clearTimeout(t);
  }, []);
  if (state === 'hidden') return null;
  return (<div className={`cookie-notice${state === 'leaving' ? ' leaving' : ''}`} role="status" onAnimationEnd={e => { if (e.animationName === 'cookie-out') setState('hidden'); }}>
    <span aria-hidden="true">🍪</span>
    <p>This site uses <a href="/privacy/">analytics cookies</a>.</p>
    <button type="button" aria-label="Dismiss" onClick={dismiss}>×</button>
  </div>);
}
