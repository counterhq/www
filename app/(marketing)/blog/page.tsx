import { SiteHeader } from '@/components/site-header';
import { getPosts } from '@/lib/source';
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Counter — Blog", "The Counter blog.", "/blog/");
export default function Page() { return (<><SiteHeader current="blog" />
  <main id="top">
    <section className="frame">
      <div className="section-head" style={{minHeight: 'calc(100vh - 147px)'}}>
        <span className="chip"><i />Blog</span>
        <h1 style={{fontSize: 'clamp(40px,5.2vw,62px)', lineHeight: '1.04'}}>Blog</h1>
        {getPosts().length === 0 ? <p className="lede">Coming soon.</p> : <div className="blog-list">{getPosts().map(post => <article key={post.slug}><time className="label" dateTime={post.date}>{post.date}</time><h2><a href={`/blog/${post.slug}/`}>{post.title}</a></h2><p className="lede">{post.description}</p></article>)}</div>}
      </div>
    </section>
  </main>
  <section className="dark">
    <footer>
      <div className="frame foot">
        <a className="brand" href="/">counter</a>
        <span className="label">© 2026 Counter</span>
      </div>
    </footer>
  </section>
</>); }
