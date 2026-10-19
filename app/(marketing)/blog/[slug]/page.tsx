import { SiteHeader } from '@/components/site-header';
import { getPosts } from '@/lib/source';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
export const dynamicParams = false;
export function generateStaticParams() { return getPosts().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find(post => post.slug === slug);
  if (!post) notFound();
  return pageMetadata(`${post.title} — Counter`, post.description, `/blog/${slug}/`);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find(post => post.slug === slug);
  if (!post) notFound();
  const Content = post.body;
  return <><SiteHeader current="blog" /><main className="frame blog-post"><a href="/blog/" className="label">← Blog</a><h1>{post.title}</h1><time className="label" dateTime={post.date}>{post.date}</time><article><Content /></article></main></>;
}
