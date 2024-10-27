const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes', { waitUntil: 'networkidle' });

  await page.waitForSelector('#checkbox1');
  await page.check('#checkbox1');
  await page.waitForSelector('#result');
  let result = await page.$eval('#result', el => el.textContent);
  if (result.includes('smiley') || result.includes('bad smiley')) {
    console.log("Checkbox 1 pass");
  } else {
    console.log("Checkbox 1 fail");
  }

  await page.waitForSelector('#checkbox2');
  await page.check('#checkbox2');
  await page.waitForSelector('#result');
  result = await page.$eval('#result', el => el.textContent);
  if (result.includes('smiley') || result.includes('bad smiley')) {
    console.log("Checkbox 2 pass");
  } else {
    console.log("Checkbox 2 fail");
  }

  await browser.close();
})();