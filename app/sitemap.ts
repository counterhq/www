import type { MetadataRoute } from 'next';
import { source, getPosts } from '@/lib/source';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/platform/', '/blog/', '/privacy/', '/terms/', ...source.getPages().map(p => p.url), ...getPosts().map(p => `/blog/${p.slug}/`)]
    .map(path => ({ url: new URL(path.endsWith('/') ? path : `${path}/`, 'https://counterhq.co').href }));
}
