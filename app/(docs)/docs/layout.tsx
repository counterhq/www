import '../docs.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider theme={{ enabled: false }}>
      <DocsLayout
        tree={source.pageTree}
        themeSwitch={{ enabled: false }}
        nav={{
          title: <><img src="/assets/brand/svg/counter-logo-ink.svg" alt="Counter" width={107} height={24} /><span className="docs-label">Docs</span></>,
          url: '/docs/',
        }}
        sidebar={{
          banner: <a className="docs-website-link" href="/"><span aria-hidden="true">←</span> Back to Counter website</a>,
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
