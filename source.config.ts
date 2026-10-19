import { defineConfig, defineDocs, defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';
export const docs = defineDocs({ dir: 'content/docs' });
export const blog = defineCollections({
  type: 'doc', dir: 'content/blog',
  schema: z.object({ title: z.string(), description: z.string(), date: z.string(), draft: z.boolean().default(false) }),
});
export default defineConfig();
