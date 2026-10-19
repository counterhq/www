import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Counter — Terms', 'The terms for using the Counter website.', '/terms/');
export default function Page() { return (<><SiteHeader />
  <main className="frame blog-post">
    <span className="label">Last updated 19 October 2026</span>
    <h1>Terms</h1>
    <article>
      <p>These terms cover your use of counterhq.co. By using the site, you agree to them.</p>
      <h2>The site</h2>
      <p>The site describes Counter and lets you join our waitlist. Joining doesn&rsquo;t guarantee access to the product. Separate terms will cover any use of the Counter platform.</p>
      <h2>Acceptable use</h2>
      <p>Don&rsquo;t misuse the site, including by submitting false details, sending automated requests or trying to disrupt it.</p>
      <h2>Content</h2>
      <p>Content on the site is for information only and may change without notice. Unless we say otherwise, it belongs to Counter.</p>
      <h2>Liability</h2>
      <p>The site is provided as is, without warranties. To the extent the law allows, we aren&rsquo;t liable for any loss from using it.</p>
      <h2>Privacy</h2>
      <p>Our <a href="/privacy/">privacy policy</a> explains how we handle your data.</p>
      <h2>Contact</h2>
      <p>Questions? Email <a href="mailto:hello@counterhq.co">hello@counterhq.co</a>.</p>
    </article>
  </main>
  <section className="dark"><SiteFooter /></section>
</>); }
