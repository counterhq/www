// Renders the social images in public/assets/brand/social from the home hero copy.
// Usage: node scripts/social-images.mjs  (after changing HEADLINE or SUBHEAD below)
import { chromium } from '@playwright/test';
import { readFileSync, copyFileSync } from 'node:fs';

const HEADLINE = 'Programmatic buying built around your outcomes';
const SUBHEAD = 'Counter brings advertisers, agencies and publishers together to buy and sell media using custom buying strategies.';
const TAGS = 'Open bidder · Open models · Open APIs · Open docs';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root));
const dataUrl = (path, type) => `data:${type};base64,${read(path).toString('base64')}`;
const SANS = dataUrl('public/fonts/NGSwv5HMAFg6IuGlBNMjxLsH8ahuQ2e8.woff2', 'font/woff2');
const MONO = dataUrl('public/fonts/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2', 'font/woff2');
const logo = theme => dataUrl(`public/assets/brand/svg/counter-logo-${theme === 'dark' ? 'white' : 'ink'}.svg`, 'image/svg+xml');

const THEMES = {
  light: { bg: '#f7f6f3', line: '#e9e9e6', ink: '#1e1b19', sub: '#4a4542' },
  dark: { bg: '#1e1b19', line: '#2b2827', ink: '#f7f6f3', sub: '#bdb8b2' },
};
// The LinkedIn banners keep their original background and 48px grid.
const BANNER = { light: { bg: '#ffffff', line: '#f1efec' }, dark: { bg: '#1e1b19', line: '#292725' } };

function grid({ bg, line }, size) {
  return `background:${bg};background-image:linear-gradient(to right,${line} 1px,transparent 1px),linear-gradient(to bottom,${line} 1px,transparent 1px);background-size:${size}px ${size}px;`;
}

function page(w, h, background, body, t) {
  return `<!doctype html><html><head><style>
@font-face{font-family:'Inter Tight';font-weight:400 600;src:url(${SANS}) format('woff2')}
@font-face{font-family:'DM Mono';font-weight:400;src:url(${MONO}) format('woff2')}
*{margin:0;box-sizing:border-box}
body{width:${w}px;height:${h}px;overflow:hidden;position:relative;${background}font-family:'Inter Tight',sans-serif;color:${t.ink}}
h1,p{text-wrap:balance}
h1{font-weight:500;letter-spacing:-0.035em;line-height:1.04}
p{color:${t.sub};letter-spacing:-0.01em;line-height:1.38}
.mono{font-family:'DM Mono',monospace;text-transform:uppercase;letter-spacing:0.1em;color:${t.sub}}
</style></head><body>${body}</body></html>`;
}

// Open Graph (1200×630) and GitHub preview (1280×640): left-aligned card.
function card(w, h, theme) {
  const t = THEMES[theme];
  const pad = Math.round(w * 0.0733);
  return page(w, h, grid(t, 40), `
<div style="position:absolute;left:${pad}px;top:${Math.round(h * 0.17)}px;width:${w - pad * 2}px">
  <img src="${logo(theme)}" style="height:${Math.round(h * 0.09)}px;display:block">
  <h1 style="font-size:${Math.round(w * 0.0567)}px;margin-top:${Math.round(h * 0.085)}px;max-width:${Math.round(w * 0.83)}px">${HEADLINE}</h1>
  <p style="font-size:${Math.round(w * 0.0213)}px;margin-top:${Math.round(h * 0.04)}px;max-width:${Math.round(w * 0.68)}px">${SUBHEAD}</p>
</div>
<div class="mono" style="position:absolute;left:${pad}px;bottom:${Math.round(h * 0.075)}px;font-size:${Math.round(w * 0.015)}px">counterhq.co</div>`, t);
}

// X header (1500×500): centred, because the avatar overlaps the bottom-left.
function xHeader(theme) {
  const t = THEMES[theme];
  return page(1500, 500, grid(t, 40), `
<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding-bottom:20px">
  <img src="${logo(theme)}" style="height:52px">
  <h1 style="font-size:50px;margin-top:34px">${HEADLINE}</h1>
  <p style="font-size:22px;margin-top:16px;max-width:900px">${SUBHEAD}</p>
</div>`, t);
}

// LinkedIn cover (2256×382): illustration left of centre, copy on the right, clear of the page logo.
function linkedin(theme) {
  const t = { ...THEMES[theme], ...BANNER[theme] };
  const art = dataUrl(`scripts/social/linkedin-art-${theme}.png`, 'image/png');
  return page(2256, 382, grid(t, 48), `
<img src="${art}" style="position:absolute;left:480px;top:0;width:1056px;height:382px">
<div style="position:absolute;right:79px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;align-items:flex-end;text-align:right">
  <img src="${logo(theme)}" style="height:68px">
  <h1 style="font-size:46px;margin-top:30px;width:620px">${HEADLINE}</h1>
  <div class="mono" style="font-size:17px;margin-top:22px">${TAGS}</div>
</div>`, t);
}

const outputs = [];
for (const theme of ['light', 'dark']) {
  const suffix = theme === 'dark' ? '-dark' : '';
  outputs.push([`og-image${suffix}.png`, 1200, 630, card(1200, 630, theme)]);
  outputs.push([`github-social-preview${suffix}.png`, 1280, 640, card(1280, 640, theme)]);
  outputs.push([`x-header${suffix}.png`, 1500, 500, xHeader(theme)]);
  outputs.push([`linkedin-banner${suffix}.png`, 2256, 382, linkedin(theme)]);
}

const browser = await chromium.launch();
for (const [name, width, height, html] of outputs) {
  const tab = await browser.newPage({ viewport: { width, height } });
  await tab.setContent(html);
  await tab.evaluate(() => document.fonts.ready);
  await tab.screenshot({ path: new URL(`public/assets/brand/social/${name}`, root).pathname });
  await tab.close();
  console.log(name);
}
await browser.close();
copyFileSync(new URL('public/assets/brand/social/og-image.png', root), new URL('public/assets/og-image.png', root));
