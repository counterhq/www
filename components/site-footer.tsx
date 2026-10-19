export function SiteFooter({ home = '/' }: { home?: string }) { return (<footer>
  <div className="frame foot">
    <a className="brand" href={home}>counter</a>
    <nav className="foot-links" aria-label="Legal">
      <a className="label" href="/privacy/">Privacy</a>
      <a className="label" href="/terms/">Terms</a>
      <span className="label">© 2026 Counter</span>
    </nav>
  </div>
</footer>); }
