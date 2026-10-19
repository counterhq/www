import type { Metadata } from 'next';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, siteName: 'Counter', type: 'website', images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', title, description, images: ['/assets/og-image.png'] } };
}
