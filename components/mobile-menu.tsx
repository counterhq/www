'use client';
import { useEffect, useState } from 'react';
// Full-screen menu below the header on narrow screens. Links are passed in from the server-rendered header.
export function MobileMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const wide = matchMedia('(min-width: 961px)');
    const onWide = () => { if (wide.matches) setOpen(false); };
    addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => { root.style.overflow = ''; removeEventListener('keydown', onKey); wide.removeEventListener('change', onWide); };
  }, [open]);
  return (<>
    <button type="button" className="nav-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
      <span /><span />
    </button>
    <nav id="mobile-menu" className="nav-menu-panel" aria-label="Mobile" data-open={open || undefined} inert={!open} onClick={e => { if ((e.target as Element).closest('a')) setOpen(false); }}>
      {children}
    </nav>
  </>);
}
