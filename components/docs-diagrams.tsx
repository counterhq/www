// Illustrative docs diagrams in the marketing palette. Static SVG, rendered on the server.
const INK = '#1e1b19';
const MUTED = '#8a847f';
const PAPER = '#fbfaf8';
const BLUE = ['#d9e6fb', '#3b6fd8'] as const;
const VIOLET = ['#e3dcfb', '#6b55c9'] as const;
const AMBER = ['#f6dfb3', '#b8862a'] as const;
const GREEN = ['#d5f0e1', '#2f9e64'] as const;
const SANS = "'Inter Tight', sans-serif";
const MONO = "'DM Mono', monospace";

function Figure({ label, caption, viewBox, children }: { label: string; caption: string; viewBox: string; children: React.ReactNode }) {
  return (
    <figure className="not-prose my-8">
      <svg viewBox={viewBox} role="img" aria-label={label} className="h-auto w-full rounded-xl border border-fd-border bg-fd-card">
        {children}
      </svg>
      <figcaption className="mt-2 text-sm text-fd-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function ArrowHead({ id, color = INK }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0L10 5L0 10z" fill={color} />
    </marker>
  );
}

function Box({ x, y, w, h, tones, title, sub }: { x: number; y: number; w: number; h: number; tones: readonly [string, string]; title: string; sub?: string }) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={tones[0]} stroke={tones[1]} strokeWidth={1.25} />
      <text x={cx} y={sub ? y + h / 2 - 3 : y + h / 2 + 5} textAnchor="middle" fontFamily={SANS} fontSize={14} fontWeight={600} fill={INK}>{title}</text>
      {sub && <text x={cx} y={y + h / 2 + 14} textAnchor="middle" fontFamily={MONO} fontSize={10} fill={INK} opacity={0.7}>{sub}</text>}
    </g>
  );
}

function Caps({ x, y, children, anchor = 'start', color = INK }: { x: number; y: number; children: React.ReactNode; anchor?: 'start' | 'middle' | 'end'; color?: string }) {
  return <text x={x} y={y} textAnchor={anchor} fontFamily={MONO} fontSize={10.5} letterSpacing={1} fill={color}>{children}</text>;
}

export function TwoSystemsDiagram() {
  return (
    <Figure
      viewBox="0 0 720 400"
      label="An agent in System 2 deploys and manages strategies. In System 1, each opportunity goes to your strategy and models, which bid in the auction. Outcomes and metrics flow back to the agent."
      caption="Agents manage over days and weeks. Strategies decide in milliseconds. Outcomes connect the two."
    >
      <defs><ArrowHead id="ts-a" /><ArrowHead id="ts-b" color={BLUE[1]} /><ArrowHead id="ts-g" color={GREEN[1]} /></defs>
      <rect x={16} y={16} width={688} height={164} rx={10} fill="none" stroke={VIOLET[1]} strokeDasharray="4 4" opacity={0.5} />
      <Caps x={32} y={40} color={VIOLET[1]}>SYSTEM 2 · AGENTS</Caps>
      <Caps x={32} y={56} color={MUTED}>DAYS, WEEKS, MONTHS</Caps>
      <rect x={16} y={212} width={688} height={172} rx={10} fill="none" stroke={BLUE[1]} strokeDasharray="4 4" opacity={0.5} />
      <Caps x={32} y={236} color={BLUE[1]}>SYSTEM 1 · BIDSTREAM</Caps>
      <Caps x={32} y={252} color={MUTED}>MILLISECONDS</Caps>

      <Box x={40} y={84} w={160} h={52} tones={[PAPER, INK]} title="You" sub="rules · approvals" />
      <Box x={260} y={72} w={200} h={76} tones={VIOLET} title="Agent" sub="observe → decide → act → learn" />
      <line x1={204} y1={110} x2={256} y2={110} stroke={INK} strokeWidth={1.25} markerStart="url(#ts-a)" markerEnd="url(#ts-a)" />
      <Caps x={230} y={102} anchor="middle" color={MUTED}>ASK</Caps>

      <Box x={40} y={276} w={130} h={60} tones={AMBER} title="Opportunity" sub="bid request" />
      <Box x={214} y={276} w={170} h={60} tones={BLUE} title="Strategy + models" sub="bid or no-bid" />
      <Box x={428} y={276} w={110} h={60} tones={[PAPER, INK]} title="Auction" sub="highest bid wins" />
      <Box x={566} y={276} w={128} h={60} tones={GREEN} title="Outcome" sub="win · click · sale" />
      <line x1={172} y1={306} x2={210} y2={306} stroke={INK} strokeWidth={1.25} markerEnd="url(#ts-a)" />
      <line x1={386} y1={306} x2={424} y2={306} stroke={INK} strokeWidth={1.25} markerEnd="url(#ts-a)" />
      <line x1={540} y1={306} x2={562} y2={306} stroke={INK} strokeWidth={1.25} markerEnd="url(#ts-a)" />
      <Caps x={405} y={298} anchor="middle" color={MUTED}>BID</Caps>

      <path d="M330 150 L330 272" fill="none" stroke={BLUE[1]} strokeWidth={1.5} markerEnd="url(#ts-b)" />
      <Caps x={340} y={206} color={BLUE[1]}>DEPLOY · UPDATE</Caps>
      <Caps x={340} y={222} color={BLUE[1]}>ROLL BACK</Caps>
      <path d="M630 272 L630 110 L464 110" fill="none" stroke={GREEN[1]} strokeWidth={1.5} markerEnd="url(#ts-g)" />
      <Caps x={620} y={206} anchor="end" color={GREEN[1]}>OUTCOMES · METRICS</Caps>
    </Figure>
  );
}

const STEPS = [
  ['Connect', 'get_bidder_contract'],
  ['Write', 'strategy JSON'],
  ['Test', 'evaluate_strategy'],
  ['Deploy', 'deploy_bidder'],
  ['Watch', 'get_metrics'],
  ['Change', 'update_bidder'],
] as const;

export function QuickstartFlowDiagram() {
  const x = (i: number) => 70 + i * 116;
  return (
    <Figure
      viewBox="0 0 720 190"
      label="Six steps: connect, write, test, deploy, watch and change. The first three spend nothing; the last three run on live traffic, and changes loop back to deploy."
      caption="Steps 1–3 spend nothing. From step 4 your strategy bids on live traffic, and each change is a new version."
    >
      <defs><ArrowHead id="qs-a" color={BLUE[1]} /></defs>
      <path d={`M${x(0) - 22} 38 L${x(0) - 22} 30 L${x(2) + 22} 30 L${x(2) + 22} 38`} fill="none" stroke={MUTED} />
      <Caps x={x(1)} y={22} anchor="middle" color={MUTED}>NO SPEND</Caps>
      <path d={`M${x(3) - 22} 38 L${x(3) - 22} 30 L${x(5) + 22} 30 L${x(5) + 22} 38`} fill="none" stroke={BLUE[1]} />
      <Caps x={x(4)} y={22} anchor="middle" color={BLUE[1]}>LIVE TRAFFIC</Caps>
      <line x1={x(0)} y1={70} x2={x(5)} y2={70} stroke={INK} strokeWidth={1.25} />
      {STEPS.map(([title, tool], i) => {
        const live = i >= 3;
        return (
          <g key={title}>
            <circle cx={x(i)} cy={70} r={18} fill={live ? BLUE[0] : PAPER} stroke={live ? BLUE[1] : INK} strokeWidth={1.25} />
            <text x={x(i)} y={75} textAnchor="middle" fontFamily={MONO} fontSize={13} fill={INK}>{i + 1}</text>
            <text x={x(i)} y={112} textAnchor="middle" fontFamily={SANS} fontSize={14} fontWeight={600} fill={INK}>{title}</text>
            <text x={x(i)} y={130} textAnchor="middle" fontFamily={MONO} fontSize={9.5} fill={MUTED}>{tool}</text>
          </g>
        );
      })}
      <path d={`M${x(5)} 142 C${x(5)} 176, ${x(3)} 176, ${x(3)} 146`} fill="none" stroke={BLUE[1]} strokeWidth={1.25} strokeDasharray="4 3" markerEnd="url(#qs-a)" />
      <Caps x={(x(3) + x(5)) / 2} y={184} anchor="middle" color={BLUE[1]}>NEW VERSION</Caps>
    </Figure>
  );
}

export function AuctionDiagram() {
  return (
    <Figure
      viewBox="0 0 720 300"
      label="An opportunity goes to three bidders. Two answer before the deadline; the third is late and counts as a no-bid. The highest bid before the deadline wins."
      caption="Illustrative prices in CPM. Only answers that arrive before the deadline count; a late bidder never holds up the auction."
    >
      <defs><ArrowHead id="au-a" /><ArrowHead id="au-m" color={MUTED} /><ArrowHead id="au-g" color={GREEN[1]} /></defs>
      <Box x={24} y={122} w={128} h={56} tones={AMBER} title="Opportunity" sub="floor 1.20" />
      {[65, 150, 235].map(y => <path key={y} d={`M152 150 C200 150, 200 ${y}, 244 ${y}`} fill="none" stroke={INK} strokeWidth={1.25} markerEnd="url(#au-a)" />)}

      <Box x={248} y={40} w={150} h={50} tones={BLUE} title="Bidder A" sub="1 replica" />
      <rect x={256} y={117} width={150} height={50} rx={8} fill={BLUE[0]} stroke={BLUE[1]} strokeWidth={1.25} opacity={0.6} />
      <Box x={248} y={125} w={150} h={50} tones={BLUE} title="Bidder B" sub="2 replicas · 1 bid" />
      <Box x={248} y={210} w={150} h={50} tones={BLUE} title="Bidder C" sub="1 replica" />

      <line x1={520} y1={22} x2={520} y2={282} stroke={INK} strokeWidth={1.25} strokeDasharray="5 4" />
      <Caps x={520} y={16} anchor="middle">DEADLINE</Caps>

      <line x1={400} y1={65} x2={504} y2={65} stroke={INK} strokeWidth={1.25} markerEnd="url(#au-a)" />
      <Caps x={452} y={57} anchor="middle">BID 2.70</Caps>
      <line x1={400} y1={150} x2={504} y2={150} stroke={INK} strokeWidth={1.25} markerEnd="url(#au-a)" />
      <Caps x={452} y={142} anchor="middle">BID 1.95</Caps>
      <line x1={400} y1={235} x2={566} y2={235} stroke={MUTED} strokeWidth={1.25} strokeDasharray="3 3" markerEnd="url(#au-m)" />
      <Caps x={452} y={227} anchor="middle" color={MUTED}>BID 2.90</Caps>
      <Caps x={576} y={239} color={MUTED}>LATE → NO-BID</Caps>

      <path d="M524 65 C560 65, 560 125, 584 125" fill="none" stroke={GREEN[1]} strokeWidth={1.5} markerEnd="url(#au-g)" />
      <Box x={588} y={100} w={108} h={56} tones={GREEN} title="Winner" sub="A · 2.70" />
    </Figure>
  );
}

export function RolloutDiagram() {
  const cols = [['WARM', 140], ['CHECK', 280], ['DRAIN', 420], ['DONE', 560]] as const;
  return (
    <Figure
      viewBox="0 0 720 200"
      label="Version 1 serves while version 2 warms up and passes health checks. Traffic then switches to version 2, and version 1 drains in-flight auctions before stopping."
      caption="Rolling out a new version under live traffic. Rolling back follows the same steps with an earlier version."
    >
      {cols.map(([label, x]) => (
        <g key={label}>
          <line x1={x} y1={40} x2={x} y2={176} stroke="#e3e0db" />
          <Caps x={x + 70} y={30} anchor="middle" color={MUTED}>{label}</Caps>
        </g>
      ))}
      <text x={40} y={84} fontFamily={MONO} fontSize={13} fill={INK}>v1</text>
      <rect x={140} y={62} width={280} height={34} rx={6} fill={BLUE[0]} stroke={BLUE[1]} />
      <text x={280} y={84} textAnchor="middle" fontFamily={SANS} fontSize={13} fill={INK}>serving</text>
      <rect x={420} y={62} width={140} height={34} rx={6} fill={BLUE[0]} stroke={BLUE[1]} strokeDasharray="4 3" opacity={0.55} />
      <text x={490} y={84} textAnchor="middle" fontFamily={SANS} fontSize={13} fill={INK}>draining</text>
      <text x={625} y={84} textAnchor="middle" fontFamily={SANS} fontSize={13} fill={MUTED}>stopped</text>

      <text x={40} y={142} fontFamily={MONO} fontSize={13} fill={INK}>v2</text>
      <rect x={140} y={120} width={140} height={34} rx={6} fill={VIOLET[0]} stroke={VIOLET[1]} />
      <text x={210} y={142} textAnchor="middle" fontFamily={SANS} fontSize={13} fill={INK}>warming up</text>
      <rect x={280} y={120} width={140} height={34} rx={6} fill={AMBER[0]} stroke={AMBER[1]} />
      <text x={350} y={142} textAnchor="middle" fontFamily={SANS} fontSize={13} fill={INK}>health checks</text>
      <rect x={420} y={120} width={270} height={34} rx={6} fill={BLUE[0]} stroke={BLUE[1]} />
      <text x={555} y={142} textAnchor="middle" fontFamily={SANS} fontSize={13} fill={INK}>serving</text>

      <line x1={420} y1={48} x2={420} y2={176} stroke={BLUE[1]} strokeWidth={2} />
      <Caps x={428} y={190} color={BLUE[1]}>TRAFFIC SWITCHES</Caps>
    </Figure>
  );
}
