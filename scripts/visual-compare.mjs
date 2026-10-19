import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { mkdir, writeFile } from 'node:fs/promises';
const dir = process.env.VISUAL_OUTPUT || '/tmp/counter-www-visual';
await mkdir(dir, { recursive: true });
const browser = await chromium.launch();
const results = [];
for (const width of [1440, 390]) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  for (const route of ['/', '/platform/', '/blog/']) {
    const shots = [];
    for (const [name, base] of [['before', 'http://127.0.0.1:8086'], ['after', 'http://127.0.0.1:3006']]) {
      const page = await context.newPage();
      await page.goto(base + route, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }' });
      const buffer = await page.screenshot({ fullPage: true });
      await writeFile(`${dir}/${width}-${route.replaceAll('/', '') || 'home'}-${name}.png`, buffer);
      shots.push(PNG.sync.read(buffer));
      await page.close();
    }
    const [a,b] = shots;
    if(a.width !== b.width || a.height !== b.height) { results.push({width,route,dimensions:[[a.width,a.height],[b.width,b.height]]}); continue; }
    const diff = new PNG({width:a.width,height:a.height});
    const pixels = pixelmatch(a.data,b.data,diff.data,a.width,a.height,{threshold:0.1});
    await writeFile(`${dir}/${width}-${route.replaceAll('/', '') || 'home'}-diff.png`, PNG.sync.write(diff));
    results.push({width,route,pixels,total:a.width*a.height,percent:100*pixels/(a.width*a.height)});
  }
  await context.close();
}
await browser.close();
console.log(JSON.stringify(results,null,2));
await writeFile(`${dir}/results.json`, JSON.stringify(results,null,2));

if (results.some(result => result.dimensions || result.percent > 0.01)) process.exitCode = 1;
