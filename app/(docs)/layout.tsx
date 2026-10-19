import SiteDocument from '@/components/site-document';
export { metadata, viewport } from '@/components/site-document';
export default function DocsRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument>{children}</SiteDocument>;
}
