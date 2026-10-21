import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Counter — The platform", "Open execution for programmatic media. Models make decisions in the bidstream. Always-on agents manage everything around them.", "/platform/");
// Isometric cube in the hero's style: top, left and right faces, centred on the top face's middle.
function Cube({ x, y, w = 13, h = 16, tones }: { x: number; y: number; w?: number; h?: number; tones: readonly [string, string, string] }) {
  const [top, left, right] = tones;
  const d = w / 2;
  return (<g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round">
    <path d={`M${x - w} ${y} ${x} ${y + d} ${x} ${y + d + h} ${x - w} ${y + h}Z`} fill={left} />
    <path d={`M${x} ${y + d} ${x + w} ${y} ${x + w} ${y + h} ${x} ${y + d + h}Z`} fill={right} />
    <path d={`M${x} ${y - d} ${x + w} ${y} ${x} ${y + d} ${x - w} ${y}Z`} fill={top} />
  </g>);
}
// Hero-style label: a small swatch and mono caps text in an outlined tag, with an optional second line.
function Tag({ x, y, w, swatch, label, sub, muted }: { x: number; y: number; w: number; swatch: string; label: string; sub?: string; muted?: boolean }) {
  const ink = muted ? '#8a847f' : '#1e1b19';
  return (<g>
    <rect x={x} y={y} width={w} height={sub ? 42 : 26} rx={3} fill="#fbfaf8" stroke={ink} strokeDasharray={muted ? '3 2' : undefined} />
    <rect x={x + 10} y={y + 9} width={8} height={8} rx="1.5" fill={swatch} stroke={ink} strokeWidth=".6" />
    <text x={x + 26} y={y + 17} fill={ink}>{label}</text>
    {sub && <text x={x + 26} y={y + 32} fill="#8a847f" fontSize={9} letterSpacing={.6}>{sub}</text>}
  </g>);
}
// Isometric slab: a diamond top face over a shallow side, centred on the top face.
function Slab({ x, y, hw, hh, t, top, side, stroke = '#3b6fd8', opacity }: { x: number; y: number; hw: number; hh: number; t: number; top: string; side: string; stroke?: string; opacity?: number }) {
  return (<g opacity={opacity} strokeLinejoin="round">
    <path d={`M${x - hw} ${y}v${t}l${hw} ${hh} ${hw} ${-hh}v${-t}`} fill={side} stroke={stroke} strokeWidth="1.1" />
    <path d={`M${x} ${y - hh} ${x + hw} ${y} ${x} ${y + hh} ${x - hw} ${y}Z`} fill={top} stroke={stroke} strokeWidth="1.1" />
  </g>);
}
export default function Page() { return (<><SiteHeader current="platform" />
  <main id="top">
    <section className="frame page-hero">
      <div className="hero-copy">
        <div className="hero-text">
          <span className="chip" style={{marginBottom: 32}}><i />Platform</span>
          <h1>Open execution for programmatic media.</h1>
          <p>Models make decisions in the bidstream. Always-on agents manage everything around them.</p>
          <p>Counter is open infrastructure for advertisers, agencies and publishers to run their own media intelligence.</p>
          <p>Built on <strong>ARTF, the IAB Tech Lab open standard for running software inside the programmatic bidstream.</strong></p>
        </div>
        <div className="hero-cta">
          <a className="btn btn-solid" href="/#waitlist">Join the waitlist</a>
          <p className="note">Open bidder · Open models · Open APIs · Open docs</p>
        </div>
      </div>
      <div className="systems-art">
        <div className="art-panel">
          <div className="art-inner">
            {/* Illustrative only: an always-on agent (System 2) deploys and tunes models that run in ARTF containers in the bidstream (System 1); bids go to the auction and outcomes flow back to the agent. Generated isometric geometry: one plane per layer. */}
            <svg viewBox="0 0 520 660" role="img" aria-label="Diagram: a bid request rises from publisher supply into the bidstream, passes through models running in ARTF containers, and leaves as a bid for the OpenRTB auction. Above, an always-on agent observes, decides and acts on those models, and outcomes flow back up to it.">
              <defs>
                <linearGradient id="p-slab" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#e9f0fc" stopOpacity=".95" /><stop offset={1} stopColor="#cfdcf6" stopOpacity=".85" /></linearGradient>
                <linearGradient id="p-agent" x1={0} y1={0} x2={0} y2={1}><stop offset={0} stopColor="#f4f1fe" stopOpacity=".95" /><stop offset={1} stopColor="#ddd5fa" stopOpacity=".9" /></linearGradient>
                <marker id="p-arr-ink" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto-start-reverse"><path d="M0 0 8 4 0 8Z" fill="#1e1b19" /></marker>
                <marker id="p-arr-amber" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto-start-reverse"><path d="M0 0 8 4 0 8Z" fill="#b8862a" /></marker>
                <marker id="p-arr-violet" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto-start-reverse"><path d="M0 0 8 4 0 8Z" fill="#6b55c9" /></marker>
              </defs>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={10} letterSpacing={1}>
                {/* Publisher supply and the OpenRTB auction */}
                <path d="M100 554 100 554 260 634 420 554 420 554 260 634Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth={1} strokeLinejoin="round" opacity=".5" />
                <path d="M260 474 420 554 260 634 100 554Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth={1} strokeLinejoin="round" opacity=".5" />
                <path d="M100 542 100 542 260 622 420 542 420 542 260 622Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth={1} strokeLinejoin="round" opacity=".8" />
                <path d="M260 462 420 542 260 622 100 542Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth={1} strokeLinejoin="round" opacity=".8" />
                <path d="M100 530 100 538 260 618 420 538 420 530 260 610Z" fill="#e9eef8" stroke="#3b6fd8" strokeWidth="1.1" strokeLinejoin="round" />
                <path d="M260 450 420 530 260 610 100 530Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth="1.1" strokeLinejoin="round" />
                <path d="M260 470 280 480 260 490 240 480Z" fill="#f6dfb3" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M210 495 230 505 210 515 190 505Z" fill="#eef3fd" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M160 520 180 530 160 540 140 530Z" fill="#f6dfb3" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M310 495 330 505 310 515 290 505Z" fill="#eef3fd" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M260 520 280 530 260 540 240 530Z" fill="#f6dfb3" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M210 545 230 555 210 565 190 555Z" fill="#eef3fd" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M360 520 380 530 360 540 340 530Z" fill="#1e1b19" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M310 545 330 555 310 565 290 555Z" fill="#eef3fd" stroke="#3b6fd8" strokeWidth="0.8" />
                <path d="M260 570 280 580 260 590 240 580Z" fill="#eef3fd" stroke="#3b6fd8" strokeWidth="0.8" />
                <ellipse cx={360} cy={530} rx={30} ry={15} fill="none" stroke="#1e1b19" strokeDasharray="2 3" />
                {/* Bid request rises from supply into the bidstream (passes behind the host plane) */}
                <path d="M160.1 530V284.1" stroke="#1e1b19" strokeWidth="1.1" fill="none" className="flow" />
                {/* System 1: host infrastructure running ARTF containers */}
                <path d="M70 330 70 348 260 443 450 348 450 330 260 425Z" fill="#bcd0f2" fillOpacity=".75" stroke="#3b6fd8" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M260 235 450 330 260 425 70 330Z" fill="url(#p-slab)" stroke="#3b6fd8" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M260 255 410 330 260 405 110 330Z" fill="none" stroke="#3b6fd8" strokeDasharray="3 4" strokeWidth=".8" />
                <path d="M180.1 270.1 379.9 369.9 339.9 389.9 140.1 290.1Z" fill="#fbfaf8" fillOpacity=".92" stroke="#3b6fd8" strokeWidth={1} />
                <path d="M160.1 280.1L359.9 379.9" stroke="#1e1b19" strokeWidth={1} fill="none" className="flow" />
                <circle cx="170.9" cy="285.4" r={3} fill="#1e1b19" fillOpacity={1} />
                <circle cx="181.7" cy="290.9" r={3} fill="#1e1b19" fillOpacity="0.55" />
                <circle cx="228.9" cy="314.5" r="2.4" fill="#1e1b19" fillOpacity={1} />
                <circle cx="291.1" cy="345.5" r="2.4" fill="#1e1b19" fillOpacity={1} />
                {/* Agent control: deploy, compare and retrain models */}
                <path d="M199.2 183.6V246.6" stroke="#6b55c9" strokeWidth="1.1" fill="none" className="flow" markerEnd="url(#p-arr-violet)" />
                <path d="M260 214V277" stroke="#6b55c9" strokeWidth="1.1" fill="none" className="flow" markerEnd="url(#p-arr-violet)" />
                <path d="M320.8 183.6V307.4" stroke="#6b55c9" strokeWidth="1.1" fill="none" className="flow" markerEnd="url(#p-arr-violet)" />
                {/* Models inside ARTF containers, in the bidstream */}
                <ellipse cx="199.2" cy="299.6" rx={30} ry={15.0} fill="#3b6fd8" fillOpacity=".12" />
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M186.2 283.6 199.2 290.1 199.2 306.1 186.2 299.6Z" fill="#a9c0ea" /><path d="M199.2 290.1 212.2 283.6 212.2 299.6 199.2 306.1Z" fill="#c3d4f3" /><path d="M199.2 277.1 212.2 283.6 199.2 290.1 186.2 283.6Z" fill="#d9e6fb" /></g>
                <g stroke="#6b55c9" strokeWidth={1} strokeLinejoin="round" fillOpacity=".28" strokeDasharray="3 2.5"><path d="M175.2 261.6 199.2 273.6 199.2 311.6 175.2 299.6Z" fill="#fbfaf8" /><path d="M199.2 273.6 223.2 261.6 223.2 299.6 199.2 311.6Z" fill="#fbfaf8" /><path d="M199.2 249.6 223.2 261.6 199.2 273.6 175.2 261.6Z" fill="#fbfaf8" /></g>
                <ellipse cx={260} cy={330} rx={30} ry={15.0} fill="#3b6fd8" fillOpacity=".12" />
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M247 314 260 320.5 260 336.5 247 330Z" fill="#dcb871" /><path d="M260 320.5 273 314 273 330 260 336.5Z" fill="#ebcd92" /><path d="M260 307.5 273 314 260 320.5 247 314Z" fill="#f6dfb3" /></g>
                <g stroke="#6b55c9" strokeWidth={1} strokeLinejoin="round" fillOpacity=".28" strokeDasharray="3 2.5"><path d="M236 292 260 304 260 342 236 330Z" fill="#fbfaf8" /><path d="M260 304 284 292 284 330 260 342Z" fill="#fbfaf8" /><path d="M260 280 284 292 260 304 236 292Z" fill="#fbfaf8" /></g>
                <ellipse cx="320.8" cy="360.4" rx={30} ry={15.0} fill="#3b6fd8" fillOpacity=".12" />
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M307.8 344.4 320.8 350.9 320.8 366.9 307.8 360.4Z" fill="#9fd2b5" /><path d="M320.8 350.9 333.8 344.4 333.8 360.4 320.8 366.9Z" fill="#bde3cd" /><path d="M320.8 337.9 333.8 344.4 320.8 350.9 307.8 344.4Z" fill="#d5f0e1" /></g>
                <g stroke="#6b55c9" strokeWidth={1} strokeLinejoin="round" fillOpacity=".28" strokeDasharray="3 2.5"><path d="M296.8 322.4 320.8 334.4 320.8 372.4 296.8 360.4Z" fill="#fbfaf8" /><path d="M320.8 334.4 344.8 322.4 344.8 360.4 320.8 372.4Z" fill="#fbfaf8" /><path d="M320.8 310.4 344.8 322.4 320.8 334.4 296.8 322.4Z" fill="#fbfaf8" /></g>
                {/* Bid leaves the bidstream for the auction */}
                <g stroke="#1e1b19" strokeWidth="0.6" strokeLinejoin="round"><path d="M336.7 364.9 343.7 368.4 343.7 375.4 336.7 371.9Z" fill="#1e1b19" /><path d="M343.7 368.4 350.7 364.9 350.7 371.9 343.7 375.4Z" fill="#2a2725" /><path d="M343.7 361.4 350.7 364.9 343.7 368.4 336.7 364.9Z" fill="#4a4542" /></g>
                <path d="M359.9 381.9V518" stroke="#1e1b19" strokeWidth="1.1" fill="none" className="flow" markerEnd="url(#p-arr-ink)" />
                {/* System 2: always-on agent loop */}
                <path d="M100 120 100 134 260 214 420 134 420 120 260 200Z" fill="#cfc4f4" fillOpacity=".85" stroke="#3b6fd8" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M260 40 420 120 260 200 100 120Z" fill="url(#p-agent)" stroke="#3b6fd8" strokeWidth="1.2" strokeLinejoin="round" />
                <ellipse cx={260} cy={120} rx={124} ry={62} fill="none" stroke="#3b6fd8" strokeWidth=".8" />
                <ellipse cx={260} cy={120} rx={96} ry={48} fill="#e3dcfb" fillOpacity=".6" stroke="#6b55c9" strokeWidth="1.1" className="flow" />
                <ellipse cx={260} cy={126} rx={40} ry={20} fill="none" stroke="#6b55c9" strokeDasharray="2 3" />
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M155 116 164 120.5 164 127.5 155 123Z" fill="#a9c0ea" /><path d="M164 120.5 173 116 173 123 164 127.5Z" fill="#c3d4f3" /><path d="M164 111.5 173 116 164 120.5 155 116Z" fill="#d9e6fb" /></g>
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M251 68 260 72.5 260 79.5 251 75Z" fill="#bcaeef" /><path d="M260 72.5 269 68 269 75 260 79.5Z" fill="#cfc4f4" /><path d="M260 63.5 269 68 260 72.5 251 68Z" fill="#e3dcfb" /></g>
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M347 116 356 120.5 356 127.5 347 123Z" fill="#9fd2b5" /><path d="M356 120.5 365 116 365 123 356 127.5Z" fill="#bde3cd" /><path d="M356 111.5 365 116 356 120.5 347 116Z" fill="#d5f0e1" /></g>
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M251 164 260 168.5 260 175.5 251 171Z" fill="#dcb871" /><path d="M260 168.5 269 164 269 171 260 175.5Z" fill="#ebcd92" /><path d="M260 159.5 269 164 260 168.5 251 164Z" fill="#f6dfb3" /></g>
                <g stroke="#1e1b19" strokeWidth="0.8" strokeLinejoin="round"><path d="M240 104 260 114 260 140 240 130Z" fill="#4f3db0" /><path d="M260 114 280 104 280 130 260 140Z" fill="#5d4ac0" /><path d="M260 94 280 104 260 114 240 104Z" fill="#6b55c9" /></g>
                <path d="M253 104h14M260 97v14" stroke="#fff" strokeWidth="1.6" />
                {/* Outcomes and logs flow back to the agent */}
                <path d="M424 530H506V120H426" stroke="#b8862a" strokeWidth="1.3" fill="none" className="flow" markerEnd="url(#p-arr-amber)" />
                {/* Tags */}
                <rect x={16} y={16} width="151.2" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x={26} y={25} width={8} height={8} rx="1.5" fill="#e3dcfb" stroke="#1e1b19" strokeWidth=".6" />
                <text x={42} y={33} fill="#1e1b19">SYSTEM 2 · AGENT</text>
                <path d="M78 42v24l26 40" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <rect x="403.2" y={16} width="100.8" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x="413.2" y={25} width={8} height={8} rx="1.5" fill="#6b55c9" stroke="#1e1b19" strokeWidth=".6" />
                <text x="429.2" y={33} fill="#1e1b19">ALWAYS ON</text>
                <path d="M453.6 42v22l-74 46" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <rect x={16} y={200} width="136.8" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x={26} y={209} width={8} height={8} rx="1.5" fill="#fbfaf8" stroke="#1e1b19" strokeWidth=".6" strokeDasharray="2 1.5" />
                <text x={42} y={217} fill="#1e1b19">ARTF CONTAINER</text>
                <path d="M152.8 213H160L173.2 263.6" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <rect x="339.6" y={236} width="158.4" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x="349.6" y={245} width={8} height={8} rx="1.5" fill="#d9e6fb" stroke="#1e1b19" strokeWidth=".6" />
                <text x="365.6" y={253} fill="#1e1b19">SYSTEM 1 · MODELS</text>
                <path d="M418.8 262v14l-70.1 34" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <rect x={16} y={432} width="115.2" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x={26} y={441} width={8} height={8} rx="1.5" fill="#1e1b19" stroke="#1e1b19" strokeWidth=".6" />
                <text x={42} y={449} fill="#1e1b19">BID REQUEST</text>
                <path d="M131.2 445H157.1" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <rect x="369.9" y={418} width="57.6" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x="379.9" y={427} width={8} height={8} rx="1.5" fill="#1e1b19" stroke="#1e1b19" strokeWidth=".6" />
                <text x="395.9" y={435} fill="#1e1b19">BID</text>
                <rect x="404.4" y={470} width="93.6" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x="414.4" y={479} width={8} height={8} rx="1.5" fill="#f6dfb3" stroke="#1e1b19" strokeWidth=".6" />
                <text x="430.4" y={487} fill="#1e1b19">OUTCOMES</text>
                <path d="M498 483H506" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <rect x={16} y={616} width="151.2" height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x={26} y={625} width={8} height={8} rx="1.5" fill="#f6dfb3" stroke="#1e1b19" strokeWidth=".6" />
                <text x={42} y={633} fill="#1e1b19">PUBLISHER SUPPLY</text>
                <rect x={360} y={616} width={144} height={26} rx={3} fill="#fbfaf8" stroke="#1e1b19" />
                <rect x={370} y={625} width={8} height={8} rx="1.5" fill="#1e1b19" stroke="#1e1b19" strokeWidth=".6" />
                <text x={386} y={633} fill="#1e1b19">OPENRTB AUCTION</text>
                <path d="M432 616V560L382 542" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <div className="rule" />
    <section className="frame" id="systems">
      <div className="section-head">
        <span className="chip"><i />Architecture</span>
        <h2>Models decide. <span className="hl hl-blue">Agents manage.</span></h2>
        <p className="lede">Media buying happens at two very different speeds.</p>
      </div>
      <div className="systems" style={{borderTop: '1px solid var(--line)'}}>
        <article className="system">
          <span className="label"><b>System 1</b></span>
          <h3>Models make the instant decisions.</h3>
          <div className="prose">
            <p className="lead">Every impression needs a decision in milliseconds.</p>
            <p>Small, purpose-built models run directly in the bidstream and answer questions such as:</p>
          </div>
          <ol className="q-list">
            <li><span>01</span>Should we bid?</li>
            <li><span>02</span>What is this impression worth?</li>
            <li><span>03</span>How likely is it to convert?</li>
            <li><span>04</span>Is this inventory high quality?</li>
            <li><span>05</span>What should we pay?</li>
          </ol>
          <div className="prose" style={{margin: '28px 0 0'}}>
            <p>They are fast, predictable and built for one job.</p>
          </div>
          <figure className="loop">
            <div className="loop-bar"><span>Decide, then learn</span><span className="loop-tempo">Milliseconds.</span></div>
            {/* Illustrative only: the fast bidding path, and the slower loop that turns outcomes into training data. */}
            <svg viewBox="10 0 464 230" role="img" aria-label="A bid request goes to the model, which places a bid. The outcome becomes training data, which retrains the model.">
              <defs><marker id="arrow-s1" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto"><path d="M0 0 8 4 0 8Z" fill="#1e1b19" /></marker></defs>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={10} letterSpacing={1} fill="#8a847f">
                <text x={12} y={28}>DECIDE · EVERY IMPRESSION</text>
                <text x={12} y={222}>LEARN · FROM EVERY OUTCOME</text>
              </g>
              <g stroke="#1e1b19" strokeWidth={1.1} fill="none" markerEnd="url(#arrow-s1)">
                <path d="M100 68h33" className="flow" /><path d="M224 68h33" className="flow" /><path d="M348 68h33" className="flow" />
              </g>
              <g stroke="#2f9e64" strokeWidth={1.2} fill="none" strokeDasharray="3 4">
                <path d="M428 86v82h-103" markerEnd="url(#arrow-s1)" /><path d="M198 168h-18V89" markerEnd="url(#arrow-s1)" />
              </g>
              <g fontSize={13} textAnchor="middle" fill="#1e1b19">
                <rect x={12} y={50} width={88} height={36} rx={4} fill="#fbfaf8" stroke="#1e1b19" /><text x={56} y={72}>Bid request</text>
                <rect x={136} y={50} width={88} height={36} rx={4} fill="#d9e6fb" stroke="#3b6fd8" /><text x={180} y={72}>Model</text>
                <rect x={260} y={50} width={88} height={36} rx={4} fill="#fbfaf8" stroke="#1e1b19" /><text x={304} y={72}>Bid</text>
                <rect x={384} y={50} width={88} height={36} rx={4} fill="#fbfaf8" stroke="#1e1b19" /><text x={428} y={72}>Outcome</text>
                <rect x={198} y={150} width={124} height={36} rx={4} fill="#d5f0e1" stroke="#2f9e64" /><text x={260} y={172}>Training data</text>
              </g>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={9.5} letterSpacing={.6} fill="#4a4542">
                <text x={436} y={114}>win</text><text x={436} y={127}>click</text><text x={436} y={140}>sale</text>
                <text x={188} y={128}>retrain</text>
              </g>
            </svg>
            <figcaption>Every outcome becomes training data, so the models keep improving.</figcaption>
          </figure>
        </article>
        <article className="system">
          <span className="label"><b>System 2</b></span>
          <h3>An agent manages the campaign over time.</h3>
          <div className="prose">
            <p className="lead">Campaigns run for days, weeks or months.</p>
            <p>Counter gives each campaign an always-on agent that can:</p>
          </div>
          <ul className="check-list">
            <li>monitor performance</li>
            <li>investigate changes</li>
            <li>adjust budgets</li>
            <li>run experiments</li>
            <li>train and deploy models</li>
            <li>ask for approval</li>
          </ul>
          <div className="prose" style={{margin: '28px 0 0'}}>
            <p>Use Counter’s agent or bring your own.</p>
          </div>
          <figure className="loop">
            <div className="loop-bar"><span>Observe, act, learn</span><span className="loop-tempo">Always running.</span></div>
            {/* Illustrative only: the agent's loop, and how it retrains and redeploys System 1 models. */}
            <svg viewBox="18 0 464 230" role="img" aria-label="The agent observes, decides, acts and learns in a loop. It retrains and deploys the models in the bidstream and observes their results.">
              <defs><marker id="arrow-s2" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto"><path d="M0 0 8 4 0 8Z" fill="#1e1b19" /></marker></defs>
              <g stroke="#1e1b19" strokeWidth={1.1} fill="none" markerEnd="url(#arrow-s2)" className="flow">
                <path d="M212 40C246 52 262 72 268 94" /><path d="M268 128C262 150 246 170 212 182" />
                <path d="M128 182C94 170 78 150 72 128" /><path d="M72 94C78 72 94 52 128 40" />
              </g>
              <g stroke="#2f9e64" strokeWidth={1.2} fill="none" strokeDasharray="3 4" markerEnd="url(#arrow-s2)">
                <path d="M212 198H414v-68" /><path d="M414 92V24H214" />
              </g>
              <circle cx={170} cy={111} r={30} fill="#e3dcfb" stroke="#6b55c9" />
              <g fontSize={13} textAnchor="middle" fill="#1e1b19">
                <text x={170} y={115}>Agent</text>
                <rect x={128} y={8} width={84} height={32} rx={4} fill="#fbfaf8" stroke="#1e1b19" /><text x={170} y={28}>Observe</text>
                <rect x={228} y={95} width={84} height={32} rx={4} fill="#fbfaf8" stroke="#1e1b19" /><text x={270} y={115}>Decide</text>
                <rect x={128} y={182} width={84} height={32} rx={4} fill="#fbfaf8" stroke="#1e1b19" /><text x={170} y={202}>Act</text>
                <rect x={28} y={95} width={84} height={32} rx={4} fill="#d5f0e1" stroke="#2f9e64" /><text x={70} y={115}>Learn</text>
                <rect x={356} y={93} width={116} height={36} rx={4} fill="#d9e6fb" stroke="#3b6fd8" /><text x={414} y={108} fontSize={11}>System 1</text><text x={414} y={122} fontSize={11}>models</text>
              </g>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={9.5} letterSpacing={.6} fill="#4a4542">
                <text x={300} y={190}>retrain · deploy</text>
                <text x={300} y={16}>results</text>
              </g>
            </svg>
            <figcaption>Each result shapes the next decision, and better models go back into the bidstream.</figcaption>
          </figure>
        </article>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block" id="models">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-blue)'}} />Models</span>
        <h2>Open models.</h2>
      </div>
      <div className="block-body prose">
        <p className="lead">You don’t need a data science team to experiment with custom decisioning.</p>
        <h3><span>01</span>Start with an open model.</h3>
        <p>Counter provides an open family of <strong>AdTech System One Models</strong> for common media problems.</p>
        <div className="cards">
          <div><span className="label">Conversion</span>Estimate the likelihood of an outcome.</div>
          <div><span className="label">Attention</span>Estimate the quality of an impression or placement.</div>
          <div><span className="label">Quality</span>Score the environment in which an ad appears.</div>
          <div><span className="label">Contextual</span>Understand the relationship between an impression and a campaign.</div>
          <div><span className="label">Bid pricing</span>Estimate what an impression is worth.</div>
          <div><span className="label">Incrementality</span>Estimate whether an impression creates an outcome that would not otherwise happen.</div>
        </div>
        <p>The models are open source. Use them as they are, change them, or build your own on top.</p>
        <h3><span>02</span>Fine-tune it on your data.</h3>
        <p>Counter provides infrastructure to train and fine-tune models on your own campaign and outcome data, with the whole lifecycle in one place.</p>
        <ol className="pipeline" aria-label="Data → Train → Evaluate → Shadow → Deploy → Monitor">
          <li><small>01</small>Data</li>
          <li><small>02</small>Train</li>
          <li><small>03</small>Evaluate</li>
          <li className="hot"><small>04</small>Shadow</li>
          <li><small>05</small>Deploy</li>
          <li><small>06</small>Monitor</li>
        </ol>
        <p><strong>Your trained models remain yours.</strong></p>
        <h3><span>03</span>Combine models.</h3>
        <p>A media decision doesn’t have to come from one black-box algorithm. A single bid can draw on several models at once:</p>
        <div className="fig-panel">
          <div className="fig-inner">
            {/* Illustrative only: four models on one platform, combining into a single bid decision. */}
            <svg viewBox="-60 24 680 300" role="img" aria-label="Advertiser, agency, publisher and open models combine into one bid decision">
              <defs><marker id="combine-arr" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto"><path d="M0 0 8 4 0 8Z" fill="#1e1b19" /></marker></defs>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={10} letterSpacing={1}>
                <path d="M110 180v14l170 85 170 -85v-14" fill="#bcd0f2" fillOpacity=".75" stroke="#3b6fd8" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M280 95 450 180 280 265 110 180Z" fill="#fbfaf8" stroke="#3b6fd8" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M280 115 410 180 280 245 150 180Z" fill="none" stroke="#3b6fd8" strokeDasharray="3 4" strokeWidth=".8" />
                <g stroke="#1e1b19" strokeWidth={1.1} fill="none" className="flow">
                  <path d="M200 193 270 208" /><path d="M250 158 274 200" /><path d="M310 158 286 200" /><path d="M360 193 290 208" />
                </g>
                <Cube x={200} y={170} tones={['#d9e6fb', '#a9c0ea', '#c3d4f3']} />
                <Cube x={250} y={135} tones={['#e3dcfb', '#bcaeef', '#cfc4f4']} />
                <Cube x={310} y={135} tones={['#f6dfb3', '#dcb871', '#ebcd92']} />
                <Cube x={360} y={170} tones={['#d5f0e1', '#9fd2b5', '#bde3cd']} />
                <ellipse cx={280} cy={226} rx={34} ry={17} fill="#3b6fd8" fillOpacity=".12" />
                <Cube x={280} y={210} w={18} h={22} tones={['#4a4542', '#1e1b19', '#2a2725']} />
                <path d="M280 252V284" stroke="#1e1b19" strokeWidth={1.1} fill="none" className="flow" markerEnd="url(#combine-arr)" />
                <Tag x={16} y={36} w={128} swatch="#e3dcfb" label="AGENCY MODEL" />
                <path d="M144 49H196L246 124" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={16} y={96} w={157} swatch="#d9e6fb" label="ADVERTISER MODEL" />
                <path d="M173 109H180L197 160" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={394} y={36} w={150} swatch="#f6dfb3" label="PUBLISHER MODEL" />
                <path d="M394 49H364L314 124" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={430} y={96} w={114} swatch="#d5f0e1" label="OPEN MODEL" />
                <path d="M430 109H423L363 160" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={216} y={290} w={128} swatch="#1e1b19" label="BID DECISION" />
              </g>
            </svg>
          </div>
        </div>
        <p><strong>Models can be private, shared, open source or commercial. Counter is the ecosystem for portable media intelligence.</strong></p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block" id="artf">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-blue)'}} />ARTF</span>
        <h2>Built on ARTF.</h2>
      </div>
      <div className="block-body prose">
        <div className="artf-nest" role="img" aria-label="Your model or bidder, inside an ARTF container, on the host platform, in the OpenRTB auction, over publisher supply">
          <div className="nest n-supply"><span>Publisher supply</span><i>05</i>
            <div className="nest n-rtb"><span>OpenRTB</span><i>04</i>
              <div className="nest n-host"><span>Host platform</span><i>03</i>
                <div className="nest n-artf"><span>ARTF container</span><i>02</i>
                  <div className="nest n-model">
                    <svg width={18} height={20} viewBox="0 0 26 29" aria-hidden="true"><g stroke="#1e1b19" strokeWidth="1" strokeLinejoin="round"><path d="M0 6.5 13 13v16L0 22.5Z" fill="#7f9fdc" /><path d="M13 13 26 6.5v16L13 29Z" fill="#a9c0ea" /><path d="M13 0 26 6.5 13 13 0 6.5Z" fill="#fbfaf8" /></g></svg>
                    Your model / bidder<i>01</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="lead">Counter is built on <strong>ARTF, the IAB Tech Lab open standard for running software inside the programmatic bidstream.</strong></p>
        <p>Package decisioning once and run it inside supporting host infrastructure, close to the auction.</p>
        <p>Counter builds on the industry standard rather than creating a proprietary execution format.</p>
        <ul className="tag-list efficiency" aria-label="Efficiency">
          <li>Fewer hops</li>
          <li>Less unnecessary compute</li>
          <li>Lower latency</li>
          <li>Lower cost</li>
          <li>Lower carbon</li>
        </ul>
        <p><a href="https://iabtechlab.com/standards/artf/" target="_blank" rel="noopener">Read the ARTF standard from IAB Tech Lab</a></p>
      </div>
    </section>
    <div className="rule" />
    <div className="band">
    <section className="frame block" id="agents">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-violet)'}} />Agents</span>
        <h2>Always-on agents.</h2>
      </div>
      <div className="block-body prose">
        <p className="lead">The campaign keeps running when the chat closes.</p>
        <p>Use Counter’s agent or bring your own. Manage it from Claude, ChatGPT, your own agent or software.</p>
        {/* Claude and OpenAI marks (Simple Icons), referenced below. */}
        <svg width={0} height={0} style={{position: 'absolute'}} aria-hidden="true">
          <symbol id="logo-claude" viewBox="0 0 24 24"><path fill="#d97757" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" /></symbol>
          <symbol id="logo-openai" viewBox="0 0 24 24"><path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></symbol>
        </svg>
        <ul className="tag-list" style={{margin: '14px 0 28px'}}>
          <li><svg className="logo" aria-hidden="true"><use href="#logo-claude" /></svg>Claude</li>
          <li><svg className="logo" aria-hidden="true"><use href="#logo-openai" /></svg>ChatGPT</li>
          <li>Your own agent</li>
          <li>Your own software</li>
        </ul>
        {/* Illustrative only: an abstract desktop agent app and a custom harness running the same recurring optimisation through Counter. */}
        <div className="operator-demo">
          <figure className="app-window" aria-label="Illustration: scheduling a recurring campaign optimisation inside a desktop agent app">
            <div className="app-chrome" aria-hidden="true"><i /><i /><i /><span>Your desktop agent</span><div className="app-switch"><b className="on"><svg className="logo" aria-hidden="true"><use href="#logo-claude" /></svg>Claude</b><b><svg className="logo" aria-hidden="true"><use href="#logo-openai" /></svg>ChatGPT</b></div></div>
            <div className="app-body">
              <div className="app-side" aria-hidden="true">
                <span className="label">Scheduled</span>
                <b className="on">CPA check</b>
                <b>Weekly report</b>
                <span className="label">Chats</span>
                <i /><i /><i />
              </div>
              <div className="app-chat">
                <p className="msg-user">Every weekday at 8am, check the spring launch campaign. If CPA is up more than 15%, find out why and move up to 10% of budget. Ask me before changing the model.</p>
                <div className="msg-agent">
                  <div className="tool-calls">
                    <span><b>counter</b> get_metrics</span>
                    <span><b>counter</b> get_recent_auctions</span>
                  </div>
                  <p>Scheduled. I’ll run this every weekday at 08:00, whether or not this chat is open.</p>
                  <div className="sched-card">
                    <div className="sched-head">
                      <div><span className="label">Recurring optimisation</span><strong>Spring launch · CPA check</strong></div>
                      <span className="sched-pill">Active</span>
                    </div>
                    <div className="sched-meta"><span>Weekdays · 08:00</span><span>Next run Mon</span></div>
                    <ol className="sched-runs">
                      <li><b>Thu</b>CPA +18% · moved 6% of budget to the open attention model</li>
                      <li><b>Fri</b>CPA steady · no change</li>
                      <li className="ask"><b>Mon</b>New model looks better · waiting for your approval</li>
                    </ol>
                  </div>
                </div>
                <div className="app-input" aria-hidden="true"><span>Reply…</span><i /></div>
              </div>
            </div>
          </figure>
          <figure className="prompt harness" aria-label="Illustration: the same recurring optimisation running in a custom harness">
            <div className="prompt-bar"><i style={{background: 'var(--hl-violet)'}} />Your own harness</div>
            <pre><code><span className="c">{"// optimise.ts"}</span>{"\nschedule("}<span className="s">{"\"0 8 * * 1-5\""}</span>{", "}<span className="k">{"async"}</span>{" () => {\n  "}<span className="k">{"const"}</span>{" m = "}<span className="k">{"await"}</span>{" counter.get_metrics({ campaign: "}<span className="s">{"\"spring-launch\""}</span>{" })\n  "}<span className="k">{"if"}</span>{" (m.cpa_change > "}<span className="n">{"0.15"}</span>{") {\n    "}<span className="k">{"await"}</span>{" agent.run("}<span className="s">{"\"Find out why CPA rose. Move up to 10% of budget.\""}</span>{", {\n      tools: counter.tools,\n      approve: ["}<span className="s">{"\"model_change\""}</span>{", "}<span className="s">{"\"total_spend\""}</span>{"],\n    })\n  }\n})"}</code></pre>
          </figure>
          <div className="equation" aria-label="Desktop agent or custom harness → Counter APIs and MCP">
            <span className="term">Desktop agent</span>
            <span className="op">/</span>
            <span className="term">Custom harness</span>
            <span className="op">→</span>
            <span className="term t-blue">Counter APIs + MCP</span>
          </div>
        </div>
        <p>Rules and approvals stay explicit. The agent acts within the permissions you give it.</p>
        <p><strong>The media platform is an API. Agents are native operators.</strong></p>
      </div>
    </section>
    </div>
    <div className="rule" />
    <section className="frame block" id="participants">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-amber)'}} />Buyers + publishers</span>
        <h2>Buyers + publishers.</h2>
      </div>
      <div className="block-body prose">
        <div className="fig-panel">
          <div className="fig-inner">
            {/* Illustrative only: buyers connect through Counter directly to publisher supply, skipping reselling hops. */}
            <svg viewBox="-110 0 780 490" role="img" aria-label="Advertisers bring objectives, data and outcomes; agencies bring strategy, models and commercial logic; both connect through Counter, which connects directly with publishers, who bring supply, signals, rules and models. A detour through reselling hops is bypassed.">
              <defs>
                <marker id="bp-arr-ink" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto"><path d="M0 0 8 4 0 8Z" fill="#1e1b19" /></marker>
                <marker id="bp-arr-amber" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto"><path d="M0 0 8 4 0 8Z" fill="#b8862a" /></marker>
              </defs>
              <g fontFamily="DM Mono, ui-monospace, monospace" fontSize={10} letterSpacing={1}>
                {/* Reselling detour, faded and bypassed */}
                <path d="M470 100H540V380H400" stroke="#8a847f" strokeWidth={1} fill="none" strokeDasharray="2 4" opacity=".8" />
                {[170, 250, 320].map(y => <g key={y} opacity=".55"><Cube x={540} y={y} w={10} h={12} tones={['#fbfaf8', '#e3e0db', '#efece8']} /></g>)}
                {/* Publisher supply: layered slab of inventory */}
                <Slab x={280} y={404} hw={120} hh={60} t={8} top="#fbfaf8" side="#e9eef8" opacity={.55} />
                <Slab x={280} y={392} hw={120} hh={60} t={8} top="#fbfaf8" side="#e9eef8" opacity={.8} />
                <Slab x={280} y={380} hw={120} hh={60} t={8} top="#fbfaf8" side="#e9eef8" />
                {[-1, 0, 1].flatMap(i => [-1, 0, 1].map(j => {
                  const cx = 280 + 40 * i - 40 * j, cy = 380 + 20 * i + 20 * j;
                  return <path key={`${i}${j}`} d={`M${cx} ${cy - 8} ${cx + 16} ${cy} ${cx} ${cy + 8} ${cx - 16} ${cy}Z`} fill={(i + j) % 2 ? '#eef3fd' : '#f6dfb3'} stroke="#3b6fd8" strokeWidth=".8" />;
                }))}
                {/* Bids down, publisher signals up */}
                <path d="M270 314V362" stroke="#1e1b19" strokeWidth={1.1} fill="none" className="flow" markerEnd="url(#bp-arr-ink)" />
                <path d="M292 368V318" stroke="#b8862a" strokeWidth={1.3} fill="none" className="flow" markerEnd="url(#bp-arr-amber)" />
                {/* Buyers */}
                <Slab x={170} y={100} hw={80} hh={40} t={10} top="#eef3fd" side="#bcd0f2" />
                <path d="M135 93 149 100 135 107 121 100Z M205 93 219 100 205 107 191 100Z" fill="#d9e6fb" stroke="#3b6fd8" strokeWidth=".8" />
                <Cube x={170} y={94} w={11} h={13} tones={['#d9e6fb', '#a9c0ea', '#c3d4f3']} />
                <Slab x={390} y={100} hw={80} hh={40} t={10} top="#f2effd" side="#cfc4f4" />
                <Cube x={360} y={98} w={10} h={12} tones={['#e3dcfb', '#bcaeef', '#cfc4f4']} />
                <Cube x={390} y={83} w={10} h={12} tones={['#e3dcfb', '#bcaeef', '#cfc4f4']} />
                <Cube x={420} y={98} w={10} h={12} tones={['#e3dcfb', '#bcaeef', '#cfc4f4']} />
                <path d="M170 152 222 208" stroke="#1e1b19" strokeWidth={1.1} fill="none" className="flow" markerEnd="url(#bp-arr-ink)" />
                <path d="M390 152 338 208" stroke="#1e1b19" strokeWidth={1.1} fill="none" className="flow" markerEnd="url(#bp-arr-ink)" />
                {/* Counter: the dark hub between both sides */}
                <ellipse cx={280} cy={262} rx={150} ry={62} fill="#3b6fd8" fillOpacity=".1" />
                <Slab x={280} y={240} hw={110} hh={55} t={16} top="#2a2725" side="#1e1b19" stroke="#1e1b19" />
                <path d="M280 200 360 240 280 280 200 240Z" fill="none" stroke="#fbfaf8" strokeOpacity=".35" strokeDasharray="3 4" />
                <path d="M225 212.5 335 267.5M335 212.5 225 267.5" stroke="#fbfaf8" strokeOpacity=".12" />
                <path d="M240 234 252 240 240 246 228 240Z" fill="#d9e6fb" />
                <path d="M280 214 292 220 280 226 268 220Z" fill="#e3dcfb" />
                <path d="M320 234 332 240 320 246 308 240Z" fill="#d5f0e1" />
                <path d="M280 254 292 260 280 266 268 260Z" fill="#f6dfb3" />
                <path d="M280 233 287 237 280 241 273 237Z M273 241l7 4 7-4 M273 245l7 4 7-4" fill="none" stroke="#fbfaf8" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
                {/* Tags */}
                <Tag x={-44} y={14} w={204} swatch="#d9e6fb" label="ADVERTISER" sub="OBJECTIVES · DATA · OUTCOMES" />
                <path d="M40 56V74L104 98" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={350} y={14} w={262} swatch="#e3dcfb" label="AGENCY" sub="STRATEGY · MODELS · COMMERCIAL LOGIC" />
                <path d="M480 56V70L446 92" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={-44} y={227} w={100} swatch="#1e1b19" label="COUNTER" />
                <path d="M56 240H168" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={-44} y={442} w={240} swatch="#f6dfb3" label="PUBLISHER" sub="SUPPLY · SIGNALS · RULES · MODELS" />
                <path d="M60 442V408L158 384" stroke="#1e1b19" fill="none" strokeDasharray="2 3" />
                <Tag x={462} y={204} w={150} swatch="#fbfaf8" label="RESELLING HOPS" muted />
              </g>
            </svg>
          </div>
        </div>
        <p className="lead">Counter gives both sides a clearer path to one another.</p>
        <p>Existing supply infrastructure can still be used where it makes sense. The result is <strong>fewer unnecessary hops, less reselling and clear provenance.</strong></p>
      </div>
    </section>
    <div className="rule" />
    <section className="frame block" id="open">
      <div className="block-head">
        <span className="chip"><i style={{background: 'var(--hl-green)'}} />Open</span>
        <h2>You own it.</h2>
      </div>
      <div className="block-body prose">
        <ul className="own-list">
          <li><strong>The auction server is open.</strong>Inspect it, run it, extend it.</li>
          <li><strong>The bidder is open.</strong>See the logic executing your media.</li>
          <li><strong>The models are open.</strong>Use ours or build your own.</li>
          <li><strong>The APIs are open.</strong>Everything is programmable.</li>
          <li className="yours"><strong>Your models are yours.</strong></li>
          <li className="yours"><strong>Your data is yours.</strong></li>
          <li className="yours"><strong>Your logs are yours.</strong>No fee to access or export them.</li>
        </ul>
        <p>Every decision is traceable, from the impression to the outcome:</p>
        <div className="equation lineage" aria-label="Opportunity → Models → Scores → Decision → Bid → Result → Outcome">
          <span className="term">Opportunity</span>
          <span className="op">→</span>
          <span className="term">Models</span>
          <span className="op">→</span>
          <span className="term">Scores</span>
          <span className="op">→</span>
          <span className="term">Decision</span>
          <span className="op">→</span>
          <span className="term t-blue">Bid</span>
          <span className="op">→</span>
          <span className="term">Result</span>
          <span className="op">→</span>
          <span className="term t-amber">Outcome</span>
        </div>
      </div>
    </section>
  </main>
  <section className="dark">
    <div className="frame closing">
      <span className="label">( Get involved )</span>
      <h2 style={{marginTop: 28}}>Build on <span className="hl hl-blue" style={{color: 'var(--ink)'}}>Counter.</span></h2>
      <p>For developers, the shorthand is:</p>
      <div className="equation stack" aria-label="Cloudflare Workers for RTB + Hugging Face for bidding models + an agentic control plane">
        <span className="term t-amber">Cloudflare Workers for RTB</span>
        <span className="op">+</span>
        <span className="term t-blue">Hugging Face for bidding models</span>
        <span className="op">+</span>
        <span className="term t-violet">an agentic control plane</span>
      </div>
      <p>Counter is for advertisers, agencies, publishers, model builders and adtech developers who want a more open way to buy and sell media.</p>
      <a className="btn" href="/#waitlist">Join the waitlist</a>
    </div>
    <SiteFooter />
  </section>
</>); }
