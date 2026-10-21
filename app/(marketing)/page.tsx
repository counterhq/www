import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WaitlistForm } from "@/components/waitlist-form";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Counter — Programmatic, on your terms", "An open platform for advertisers, agencies and publishers to run their own intelligence in the bidstream.", "/");
// Illustrative only: each audience's tile from the hero diagram, on its own slab.
const TONES = { advertiser: ['#d9e6fb', '#a9c0ea'], agency: ['#e3dcfb', '#bcaeef'], publisher: ['#f6dfb3', '#dcb871'] } as const;
function Tile({ x, y, kind }: { x: number; y: number; kind: keyof typeof TONES }) {
  const [top, side] = TONES[kind];
  return (<g transform={`translate(${x} ${y})`}>
    <path d="M-22 0v11l22 11 22 -11V0" fill={side} /><path d="M0 -11 22 0 0 11 -22 0Z" fill={top} stroke="#1e1b19" strokeWidth=".8" />
  </g>);
}
function Slab({ y, opacity = 1 }: { y: number; opacity?: number }) {
  return (<g transform={`translate(0 ${y})`} opacity={opacity}>
    <path d="M20 80v10l100 46 100 -46V80" fill="#e9f0fc" stroke="#3b6fd8" />
    <path d="M120 34 220 80l-100 46L20 80Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth="1.1" />
  </g>);
}
function AudienceArt({ kind }: { kind: keyof typeof TONES }) {
  return (<div className="art-panel aud-art" aria-hidden="true"><div className="art-inner">
    <svg viewBox="0 0 240 170">
      {kind === 'publisher' && <><Slab y={24} opacity={.55} /><Slab y={12} opacity={.8} /></>}
      <Slab y={0} />
      {kind === 'advertiser' && <Tile x={120} y={76} kind="advertiser" />}
      {kind === 'agency' && <><Tile x={84} y={76} kind="agency" /><Tile x={120} y={60} kind="agency" /><Tile x={156} y={76} kind="agency" /><Tile x={120} y={92} kind="agency" /></>}
      {kind === 'publisher' && <><Tile x={84} y={76} kind="publisher" /><Tile x={156} y={76} kind="publisher" /><path d="M120 76V24" stroke="#b8862a" strokeWidth="1.3" fill="none" className="flow" /><circle cx={120} cy={76} r={3} fill="#1e1b19" /></>}
    </svg>
  </div></div>);
}
export default function Page() { return (<><SiteHeader />
  <main id="top">
    <section className="frame hero">
      <div className="hero-copy">
        <div className="hero-text">
          <h1>Programmatic, on your terms.</h1>
          <p>An open platform for <strong>advertisers, agencies and publishers</strong> to run their own intelligence in the bidstream.</p>
          <p className="hero-tagline">Your models. Your agents. Your rules.</p>
        </div>
        <div className="hero-cta">
          <a className="btn btn-solid" href="#waitlist">Join the waitlist</a>
          <p className="note">Built on ARTF, the IAB Tech Lab open standard.</p>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-panel">
          <div className="art-inner">
            {/* Illustrative only: advertiser, agency, open and publisher models composed on Counter's open execution layer above publisher supply. */}
            <svg viewBox="0 0 520 610" role="img" aria-label="Diagram: advertisers and agencies bring objectives and models, publishers bring supply and signals, and open models sit alongside them on Counter's open execution layer">
              <defs>
                <linearGradient id="slab" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset={0} stopColor="#e9f0fc" stopOpacity=".95" />
                  <stop offset={1} stopColor="#cfdcf6" stopOpacity=".85" />
                </linearGradient>
              </defs>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={10} letterSpacing={1}>
                {/* Publisher supply */}
                <g stroke="#3b6fd8" strokeWidth={1} fill="#fbfaf8">
                  <path d="M260 432 435 514l-175 82L85 514Z" opacity=".55" />
                  <path d="M260 420 435 502l-175 82L85 502Z" opacity=".8" />
                  <path d="M260 408 435 490l-175 82L85 490Z" />
                </g>
                <g stroke="#3b6fd8" strokeWidth=".8">
                  <path d="M175 474 209 490l-34 16L141 490Z" fill="#d9e6fb" />
                  <path d="M260 434 294 450l-34 16L226 450Z" fill="#e3dcfb" />
                  <path d="M345 474 379 490l-34 16L311 490Z" fill="#d5f0e1" />
                </g>
                <path d="M240 528v10l20 10 20 -10v-10" fill="#dcb871" /><path d="M260 518 280 528l-20 10L240 528Z" fill="#f6dfb3" stroke="#1e1b19" strokeWidth=".8" />
                {/* Buyer side: advertiser and agency */}
                <path d="M85 100v10l80 38 80 -38v-10" fill="#bcd0f2" fillOpacity=".8" stroke="#3b6fd8" />
                <path d="M165 62 245 100l-80 38L85 100Z" fill="#eef3fd" stroke="#3b6fd8" strokeWidth="1.1" />
                <path d="M275 100v10l80 38 80 -38v-10" fill="#cfc4f4" fillOpacity=".8" stroke="#3b6fd8" />
                <path d="M355 62 435 100l-80 38L275 100Z" fill="#f2effd" stroke="#3b6fd8" strokeWidth="1.1" />
                <path d="M143 98v11l22 11 22 -11v-11" fill="#a9c0ea" /><path d="M165 87 187 98l-22 11L143 98Z" fill="#d9e6fb" stroke="#1e1b19" strokeWidth=".8" />
                <path d="M333 98v11l22 11 22 -11v-11" fill="#bcaeef" /><path d="M355 87 377 98l-22 11L333 98Z" fill="#e3dcfb" stroke="#1e1b19" strokeWidth=".8" />
                {/* Flows: buyers into Counter, Counter into supply */}
                <g stroke="#1e1b19" strokeWidth="1.1" fill="none" className="flow">
                  <path d="M165 148 165 252" /><path d="M355 148 355 252" />
                  <path d="M175 354 175 490" /><path d="M345 354 345 490" /><path d="M260 394 260 450" />
                </g>
                {/* Publisher signals up into Counter */}
                <path d="M300 520 300 375" stroke="#b8862a" strokeWidth="1.3" fill="none" className="flow" />
                <g fill="#1e1b19">
                  <circle cx={175} cy={490} r={3} /><circle cx={345} cy={490} r={3} /><circle cx={260} cy={450} r={3} />
                </g>
                {/* Counter: open execution layer */}
                <path d="M260 208 435 290l-175 82L85 290Z" fill="url(#slab)" stroke="#3b6fd8" strokeWidth="1.2" />
                <path d="M85 290v22l175 82 175 -82v-22" fill="#bcd0f2" fillOpacity=".7" stroke="#3b6fd8" strokeWidth="1.2" />
                <path d="M260 372v22" stroke="#3b6fd8" strokeWidth="1.2" />
                <path d="M260 229 390 290l-130 61L130 290Z" fill="none" stroke="#3b6fd8" strokeDasharray="3 4" />
                <path d="M238 262v11l22 11 22 -11v-11" fill="#9fd2b5" /><path d="M260 251 282 262l-22 11L238 262Z" fill="#d5f0e1" stroke="#1e1b19" strokeWidth=".8" />
                <path d="M183 290v11l22 11 22 -11v-11" fill="#a9c0ea" /><path d="M205 279 227 290l-22 11L183 290Z" fill="#d9e6fb" stroke="#1e1b19" strokeWidth=".8" />
                <path d="M293 290v11l22 11 22 -11v-11" fill="#bcaeef" /><path d="M315 279 337 290l-22 11L293 290Z" fill="#e3dcfb" stroke="#1e1b19" strokeWidth=".8" />
                <path d="M238 318v11l22 11 22 -11v-11" fill="#dcb871" /><path d="M260 307 282 318l-22 11L238 318Z" fill="#f6dfb3" stroke="#1e1b19" strokeWidth=".8" />
                {/* Tags */}
                <g>
                  <rect x={16} y={18} width={124} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" /><rect x={26} y={27} width={8} height={8} rx="1.5" fill="#d9e6fb" stroke="#1e1b19" strokeWidth=".6" /><text x={42} y={35} fill="#1e1b19">ADVERTISER</text>
                  <path d="M78 44v18l14 20" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                  <rect x={392} y={18} width={108} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" /><rect x={402} y={27} width={8} height={8} rx="1.5" fill="#e3dcfb" stroke="#1e1b19" strokeWidth=".6" /><text x={418} y={35} fill="#1e1b19">AGENCY</text>
                  <path d="M446 44v18l-14 20" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                  <rect x={172} y={166} width={176} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" /><text x={186} y={183} fill="#1e1b19">COUNTER · OPEN LAYER</text>
                  <path d="M260 192v14" stroke="#1e1b19" strokeDasharray="2 3" />
                  <rect x={392} y={196} width={124} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" /><rect x={402} y={205} width={8} height={8} rx="1.5" fill="#d5f0e1" stroke="#1e1b19" strokeWidth=".6" /><text x={418} y={213} fill="#1e1b19">OPEN MODELS</text>
                  <path d="M392 209h-40l-66 46" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                  <rect x={392} y={404} width={112} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" /><rect x={402} y={413} width={8} height={8} rx="1.5" fill="#f6dfb3" stroke="#1e1b19" strokeWidth=".6" /><text x={418} y={421} fill="#1e1b19">SIGNALS</text>
                  <path d="M392 417h-88" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                  <rect x={16} y={566} width={124} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" /><rect x={26} y={575} width={8} height={8} rx="1.5" fill="#f6dfb3" stroke="#1e1b19" strokeWidth=".6" /><text x={42} y={583} fill="#1e1b19">PUBLISHERS</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block aud tone-blue" id="advertisers">
      <div className="block-head">
        <span className="chip"><i />For advertisers</span>
        <AudienceArt kind="advertiser" />
      </div>
      <div className="block-body">
        <h2>Buy for the outcomes that <span className="hl hl-blue">matter to your business</span></h2>
        <p>Use sales, qualified leads or store visits to shape buying decisions. Set suitability rules around your brand and see how your data influences where your budget goes.</p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block aud tone-violet" id="agencies">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-violet)'}} />For agencies</span>
        <AudienceArt kind="agency" />
      </div>
      <div className="block-body">
        <h2>Turn your expertise into <span className="hl hl-violet">your own buying products</span></h2>
        <p>Build buying strategies around each client. Use your data and models across campaigns, retain the models you develop, and create a service clients can buy from you.</p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block aud tone-amber" id="publishers">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-amber)'}} />For publishers</span>
        <AudienceArt kind="publisher" />
      </div>
      <div className="block-body">
        <h2>Help buyers recognise <span className="hl hl-amber">the value of your inventory</span></h2>
        <p>Bring your audience, context and placement signals into the buying decision. Help advertisers assess what makes your inventory valuable, with rules for how your supply and signals are used.</p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block" id="how">
      <div className="block-head">
        <span className="chip"><i />How it works</span>
        <h2>Start with one <span className="hl hl-blue">buying problem</span></h2>
      </div>
      <div className="block-body prose">
        <p className="lead">Choose an outcome, such as a sale, a store visit or an impression that meets your brand requirements. Start with a Counter model or bring your own. Test it on your data, then use it to guide buying decisions.</p>
        <p>Counter is being built to run these decisions close to the auction and manage the campaign around them.</p>
        <p><a className="btn" href="/platform/">Explore the platform →</a></p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame" id="open">
      <div className="section-head center">
        <span className="chip"><i style={{background: 'var(--hl-green)'}} />Open</span>
        <h2>Open <span className="hl hl-violet">by design.</span></h2>
        <p className="lede">The technology underneath Counter should not become another black box.</p>
      </div>
      <ul className="open-list four" style={{margin: 0, padding: 0}}>
        <li><span>[A]</span>Open bidder.</li>
        <li><span>[B]</span>Open models.</li>
        <li><span>[C]</span>Open APIs.</li>
        <li><span>[D]</span>Open docs.</li>
      </ul>
      <ul className="open-list three yours" style={{margin: 0, padding: 0}}>
        <li><span>[E]</span>Your models.</li>
        <li><span>[F]</span>Your data.</li>
        <li><span>[G]</span>Your logs.</li>
      </ul>
      <div className="open-foot">
        <p>Inspect it, extend it, self-host parts of it or use our managed infrastructure.</p>
        <p>No additional charge to access or export your own logs.</p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame faq-wrap" id="faq">
      <div className="faq-side">
        <span className="chip"><i style={{background: 'var(--hl-amber)'}} />FAQ</span>
        <h2>Questions <span className="hl hl-amber">before you join</span></h2>
      </div>
      <div className="faq">
        <details open>
          <summary><span className="q-num">01</span>Who is Counter for?<span className="plus" /></summary>
          <div className="answer">
            <p>Advertisers looking for buying strategies tailored to their business, agencies building their own buying products, and publishers bringing their inventory and signals closer to demand.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">02</span>Is Counter an SSP or a DSP?<span className="plus" /></summary>
          <div className="answer">
            <p>Neither. Counter is a new kind of RTB infrastructure that brings both sides together. Everyone deploys their own logic into the same bidstream:</p>
            <ul>
              <li><strong>Advertisers</strong> bid on the outcomes that matter to their business.</li>
              <li><strong>Agencies</strong> run their own buying strategies for each client.</li>
              <li><strong>Data curators</strong> offer their audiences and signals to buyers.</li>
              <li><strong>Publishers</strong> decide how their supply and signals are used.</li>
            </ul>
            <p>No extra hops in between.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">03</span>Do I need my own models?<span className="plus" /></summary>
          <div className="answer">
            <p>No. We’re building starter models you can use and adapt to your data. Teams with existing models will be able to bring their own.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">04</span>Who owns my data and models?<span className="plus" /></summary>
          <div className="answer">
            <p>You do. Your data and models are yours to keep, export, delete or use however you like.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">05</span>Will I need to replace my current setup?<span className="plus" /></summary>
          <div className="answer">
            <p>We’re designing Counter so you can start with a specific use case. The right setup will depend on your supply partners, data and campaign requirements, which we’ll discuss before an early-access campaign.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">06</span>Where will the inventory come from?<span className="plus" /></summary>
          <div className="answer">
            <p>We’re building around existing supply partners and exploring direct publisher connections. Available partners and inventory will be confirmed for early-access campaigns.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">07</span>How much will it cost?<span className="plus" /></summary>
          <div className="answer">
            <p>We’re working out pricing models with our early partners. Pricing could be based on compute or on CPM.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">08</span>When can I use it?<span className="plus" /></summary>
          <div className="answer">
            <p>We’re building the first version, with launch planned for Q1 2027. Join the waitlist for launch updates and opportunities to take part in early-access campaigns.</p>
          </div>
        </details>
      </div>
    </section>
  </main>
  <section className="dark" id="waitlist">
    <div className="frame waitlist">
      <div>
        <span className="label">( Early access )</span>
        <h2 style={{marginTop: 28}}>Help shape the <span className="hl hl-blue">first campaigns on Counter</span></h2>
        <p>We’re inviting <strong>advertisers, agencies and publishers</strong> to help test a more tailored approach to programmatic buying.</p>
        <p>Join the waitlist for launch updates and opportunities to take part. Planned launch: Q1 2027.</p>
      </div>
      <div>

        <WaitlistForm /></div>
    </div>
    <SiteFooter home="#top" />
  </section>
</>); }
