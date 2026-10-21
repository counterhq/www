import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Counter — Privacy', 'How Counter handles the information you share with us.', '/privacy/');
export default function Page() { return (<><SiteHeader />
  <main className="frame blog-post">
    <span className="label">Last updated 21 October 2026</span>
    <h1>Privacy</h1>
    <article>
      <p>This policy covers counterhq.co. We collect as little as we can and never sell your data.</p>
      <h2>What we collect</h2>
      <p>When you join the waitlist we store your email address, and the company and role you give us. Our hosting provider processes your IP address to serve the site and to stop abuse. We use Google Analytics to understand how people use the site. It sets cookies and collects usage data such as pages visited and approximate location. We don&rsquo;t use advertising cookies.</p>
      <h2>How we use it</h2>
      <p>We use your details to contact you about Counter, including early access, and to understand who is interested. You can ask us to stop at any time.</p>
      <h2>Who processes it</h2>
      <p>We use Vercel to host the site, Attio to store waitlist sign-ups and Resend to notify our team of new sign-ups, and Google Analytics to measure site usage. They handle your data only on our behalf.</p>
      <h2>Your rights</h2>
      <p>You can ask to see, correct or delete your data by emailing <a href="mailto:hello@counterhq.co">hello@counterhq.co</a>. We keep waitlist details until you ask us to remove them or we no longer need them.</p>
      <h2>Changes</h2>
      <p>If this policy changes, we&rsquo;ll update this page and the date above.</p>
    </article>
  </main>
  <section className="dark"><SiteFooter /></section>
</>); }
