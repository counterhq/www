import { SiteHeader } from '@/components/site-header';
import { WaitlistForm } from "@/components/waitlist-form";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Counter — Own how your media is bought", "Counter is an open platform for advertisers, agencies and publishers. Run your own models and agents directly in the bidstream.", "/");
export default function Page() { return (<><SiteHeader />
  <main id="top">
    <section className="frame hero">
      <div className="hero-copy">
        <div className="hero-text">
          <h1>Own how your media is bought.</h1>
          <p>Counter is an open platform for advertisers, agencies and publishers.</p>
          <p>Run your own models and agents directly in the bidstream — or start with ours.</p>
          <p>Built on <strong>ARTF, the IAB Tech Lab open standard for running software inside the programmatic bidstream.</strong></p>
        </div>
        <div className="hero-cta">
          <a className="btn btn-solid" href="#waitlist">Join the waitlist</a>
          <p className="note">Open bidder. Open models. Open APIs. Open docs.</p>
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
    <section className="frame" id="why">
      <div className="section-head">
        <span className="side-index">( 01 / 04 )</span>
        <span className="chip"><i />Why</span>
        <h2>Programmatic should be <span className="hl hl-blue">open.</span> <span className="muted">Too much of programmatic advertising happens inside systems that buyers and publishers cannot inspect, change or own.</span></h2>
        <p className="lede">Counter is built around three simple ideas.</p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame pillars audiences" id="ideas" aria-label="Three ideas">
      <article className="pillar">
        <div className="num">[01]</div>
        <div className="icon"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx={4} cy={4} r={2} /><circle cx={12} cy={4} r={2} /><circle cx={8} cy={12} r={2} /><path d="M4 6v1.5L8 10M12 6v1.5L8 10" /></svg></div>
        <h3>Own the intelligence</h3>
        <p>Use open models, fine-tune them on your own data or bring your own.</p>
        <p>Agencies, advertisers and publishers can all contribute models and signals.</p>
        <p>Your models remain yours.</p>
      </article>
      <article className="pillar">
        <div className="num">[02]</div>
        <div className="icon"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M5 4 1.5 8 5 12M11 4l3.5 4L11 12M9.5 2.5l-3 11" /></svg></div>
        <h3>Open infrastructure</h3>
        <p>The bidder is open source. The models are open. The APIs and documentation are open.</p>
        <p>Counter runs on ARTF, an open IAB Tech Lab standard designed to let containerised logic run directly inside the programmatic bidstream.</p>
        <p>Inspect it. Extend it. Run it yourself or use our managed infrastructure.</p>
      </article>
      <article className="pillar">
        <div className="num">[03]</div>
        <div className="icon"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M2 8h12M10 4l4 4-4 4" /></svg></div>
        <h3>Connect buyers and publishers</h3>
        <p>Create clearer, more direct paths between demand and publisher supply.</p>
        <p>Fewer unnecessary hops. Less reselling. Clearer economics and provenance.</p>
        <p>Publishers keep control of their supply and intelligence. Buyers keep control of how it is valued.</p>
      </article>
    </section>
    <div className="rule" />
    <section className="frame" id="intelligence">
      <div className="section-head">
        <span className="side-index">( 02 / 04 )</span>
        <span className="chip"><i style={{background: 'var(--hl-violet)'}} />Intelligence</span>
        <h2>Models decide. <span className="hl hl-violet">Agents manage.</span></h2>
      </div>
    </section>
    <div className="rule" />
    <section className="frame pillars audiences two" aria-label="Models and agents">
      <article className="pillar">
        <div className="num">[01]</div>
        <div className="icon"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M9 1.5 3.5 9H8l-1 5.5L12.5 7H8l1-5.5Z" /></svg></div>
        <h3>Models make the instant decisions.</h3>
        <p>Purpose-built models run inside the bidstream and decide whether an impression is valuable, whether to bid and what it is worth.</p>
        <p>Start with an open model, fine-tune it on your data, or bring your own.</p>
      </article>
      <article className="pillar">
        <div className="num">[02]</div>
        <div className="icon"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2.5" y={4} width={11} height={9} rx={2} /><path d="M8 1.5V4M6 8.5h.01M10 8.5h.01" /></svg></div>
        <h3>Agents manage everything around them.</h3>
        <p>An always-on agent monitors the campaign over hours, days and weeks.</p>
        <p>It can investigate performance, run experiments, adjust budgets, retrain models and ask for approval when needed.</p>
        <p>Use Counter’s agent or bring your own.</p>
        <p>Manage it from Counter, Claude, ChatGPT or another agent you already use.</p>
      </article>
    </section>
    <div className="rule" />
    <section className="frame" id="open">
      <div className="section-head center">
        <span className="side-index">( 03 / 04 )</span>
        <span className="chip"><i style={{background: 'var(--hl-green)'}} />Open</span>
        <h2>Open from <span className="hl hl-violet">the beginning.</span></h2>
      </div>
      <ul className="open-list" style={{margin: 0, padding: 0}}>
        <li><span>[A]</span>Open bidder.</li>
        <li><span>[B]</span>Open models.</li>
        <li><span>[C]</span>Open APIs.</li>
        <li><span>[D]</span>Open docs.</li>
        <li><span>[E]</span>Your logs.</li>
      </ul>
      <div className="open-foot">
        <p>Anyone can sign up and build.</p>
        <a className="btn btn-solid" href="#waitlist">Join the waitlist</a>
      </div>
    </section>
    <div className="rule" />
    <section className="frame faq-wrap" id="faq">
      <div className="faq-side">
        <span className="side-index">( 04 / 04 )</span>
        <span className="chip"><i style={{background: 'var(--hl-amber)'}} />FAQ</span>
        <h2>Questions, <span className="hl hl-amber">answered.</span></h2>
        <p>Something we haven’t covered? Join the waitlist and tell us what you need.</p>
      </div>
      <div className="faq">
        <details open>
          <summary><span className="q-num">01</span>What are you building?<span className="plus" /></summary>
          <div className="answer">
            <p>An open execution platform for programmatic media.</p>
            <p>Buyers bring their own models and agents. Publishers bring their supply, signals and rules. Counter connects both sides directly and gives them an open place to execute.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">02</span>What is ARTF?<span className="plus" /></summary>
          <div className="answer">
            <p>ARTF — the Agentic Real Time Framework — is an open standard from IAB Tech Lab for running software directly inside the programmatic bidstream.</p>
            <p>A container is a sealed package of software: the code plus everything it needs to run. Because the package is standard, any platform that supports ARTF can run it the same way, without a custom integration.</p>
            <p>Instead of sending every auction to another external system, models and other decisioning logic run in containers close to where the auction happens.</p>
            <p>This means fewer network hops, lower latency and a standard way to deploy the same logic across supporting platforms.</p>
            <p>Counter is built on ARTF rather than a proprietary execution format.</p>
            <p>Read the <a href="https://iabtechlab.com/standards/artf/" target="_blank" rel="noopener">ARTF standard from IAB Tech Lab</a> and the <a href="https://github.com/IABTechLab/agentic-real-time-framework" target="_blank" rel="noopener">specification on GitHub</a>.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">03</span>Is this a DSP or an SSP?<span className="plus" /></summary>
          <div className="answer">
            <p>It overlaps with both, but we are not trying to recreate either in the traditional sense.</p>
            <p>We are building an open layer for media decisioning and execution.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">04</span>What is open source?<span className="plus" /></summary>
          <div className="answer">
            <p>The core auction and bidding infrastructure is open source.</p>
            <p>We also release an open family of media decisioning models, along with the tools and examples needed to run them.</p>
            <p>Your logs are yours. Auction logs, model decisions, campaign activity and agent actions are available to you, with no charge to access or export them.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">05</span>Do I need to build my own models?<span className="plus" /></summary>
          <div className="answer">
            <p>No.</p>
            <p>You can start with open models provided by the community and fine-tune them using your own data.</p>
            <p>The platform includes infrastructure for training, evaluating, fine-tuning, testing and deploying models into live buying.</p>
            <p>More advanced teams can bring completely custom models.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">06</span>How do agents work?<span className="plus" /></summary>
          <div className="answer">
            <p>Agents manage the longer-running work around a campaign.</p>
            <p>They can monitor performance, adjust settings, run experiments, retrain models, investigate problems and produce reports.</p>
            <p>You can use our agent or connect your own. The platform is API-first, so agents are native operators rather than an interface added afterwards.</p>
            <p>You can manage a campaign from Claude, ChatGPT or another compatible agent, including recurring tasks that keep running on a schedule.</p>
            <p>For example:</p>
            <blockquote>“Check this campaign every morning. If CPA rises above £20, investigate why and tell me before making a major change.”</blockquote>
          </div>
        </details>
        <details>
          <summary><span className="q-num">07</span>What does direct supply mean?<span className="plus" /></summary>
          <div className="answer">
            <p>Every impression should have a clear path back to the publisher.</p>
            <p>Supply can still come through infrastructure partners, but we want to avoid unnecessary reselling and opaque supply chains.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">08</span>How can agencies make money?<span className="plus" /></summary>
          <div className="answer">
            <p>Transparency does not mean agencies cannot make margin.</p>
            <p>Platform fees, optimisation fees, model fees and performance-based economics can all be explicitly built into campaigns.</p>
          </div>
        </details>
        <details>
          <summary><span className="q-num">09</span>When will it be available?<span className="plus" /></summary>
          <div className="answer">
            <p>We go live in Q1 2027.</p>
            <p>We are building the first version now and are looking for agencies, brands, publishers, developers and adtech teams interested in helping shape it.</p>
            <p><a className="btn" href="#waitlist" style={{marginTop: 8}}>Join the waitlist</a></p>
          </div>
        </details>
      </div>
    </section>
  </main>
  <section className="dark" id="waitlist">
    <div className="frame waitlist">
      <div>
        <span className="label">( Early access )</span>
        <h2 style={{marginTop: 28}}>Join <span className="hl hl-blue">the waitlist.</span></h2>
        <p>We go live in Q1 2027. Sign up for early access and help shape it.</p>
      </div>
      <div>

        <WaitlistForm /></div>
    </div>
    <footer>
      <div className="frame foot">
        <a className="brand" href="#top">counter</a>
        <span className="label">© 2026 Counter</span>
      </div>
    </footer>
  </section>
</>); }
