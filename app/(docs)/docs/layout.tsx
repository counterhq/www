import '../docs.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootProvider theme={{ enabled: false }}><DocsLayout tree={source.pageTree} themeSwitch={{ enabled: false }} nav={{ title: 'counter / docs', url: '/' }} links={[{ text: 'Platform', url: '/platform/' }, { text: 'Blog', url: '/blog/' }]}>{children}</DocsLayout></RootProvider>;
}
