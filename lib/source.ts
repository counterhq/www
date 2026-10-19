import { docs, blog } from '@/.source/server';
import { loader } from 'fumadocs-core/source';
export const source = loader({ baseUrl: '/docs', source: docs.toFumadocsSource() });
export function getPosts() {
  return blog.filter(post => !post.draft).map(post => ({ ...post, slug: post.info.path.replace(/\.mdx?$/, '') }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
