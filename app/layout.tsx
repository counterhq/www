import './fonts.css';
import type { Metadata, Viewport } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL('https://counterhq.co'),
  icons: { icon: [{ url: '/favicon.ico', sizes: '48x48' }, { url: '/favicon.svg', type: 'image/svg+xml' }], apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};
export const viewport: Viewport = { themeColor: '#f7f6f3' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head>
    <link rel="preload" href="/fonts/NGSwv5HMAFg6IuGlBNMjxLsH8ahuQ2e8.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
  </head><body>{children}</body></html>;
}
