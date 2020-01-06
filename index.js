const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/watch?v=wf1MfO4V7cA&list=RDZdgQ82boywc&index=8');
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();