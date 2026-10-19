export function SiteHeader({ current }: { current?: 'platform' | 'blog' }) { return (<header>
  <div className="frame nav">
    <a className="brand" href="/" aria-label="Counter home">
      <svg width={26} height={26} viewBox="0 0 26 26" aria-hidden="true">
        <path d="M13 2 24 8l-11 6L2 8l11-6Z M15.2 5.9 19.4 8 15.2 10.1 11 8Z" fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M2 13l11 6 11-6M2 18l11 6 11-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      counter
    </a>
    <nav className="nav-links" aria-label="Primary">
      <a href="/platform/" aria-current={current === 'platform' ? 'page' : undefined}>Platform</a>
      <a href="/blog/" aria-current={current === 'blog' ? 'page' : undefined}>Blog</a>
      <a href="/docs/">Docs<svg className="ext" width={10} height={10} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M3 1.5h5.5V7M8.5 1.5 1.5 8.5" /></svg></a>
      <a href="/#faq">FAQ</a>
    </nav>
    <a className="btn" href="/#waitlist">Join the waitlist</a>
  </div>
</header>); }
