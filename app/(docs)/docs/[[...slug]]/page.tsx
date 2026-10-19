import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import defaultComponents from 'fumadocs-ui/mdx';
import { pageMetadata } from '@/lib/metadata';
import * as diagrams from '@/components/docs-diagrams';
export const dynamicParams = false;
export function generateStaticParams() { return source.generateParams(); }
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();
  return pageMetadata(`${page.data.title} — Counter`, page.data.description || '', page.url);
}
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const page = source.getPage((await params).slug);
  if (!page) notFound();
  const Content = page.data.body;
  return <DocsPage toc={page.data.toc}><DocsTitle>{page.data.title}</DocsTitle><DocsDescription>{page.data.description}</DocsDescription><DocsBody><Content components={{ ...defaultComponents, ...diagrams }} /></DocsBody></DocsPage>;
}
