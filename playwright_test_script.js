const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  const checkboxIds = ['checkbox1', 'checkbox2'];
  for (let id of checkboxIds) {
    await page.waitForSelector(`#${id}`);
    await page.check(`#${id}`);
    const checkedValue = await page.$eval(`#${id}`, el => el.checked);
    if (checkedValue) {
      const result = await page.$eval('#result', el => el.innerText);
      const isSmiley = result.includes('☺');
      const isBadSmiley = result.includes('☹');
      console.assert(isSmiley || isBadSmiley, `Expected smiley or bad smiley, got ${result}`);
    } else {
      console.error(`Checkbox ${id} could not be checked.`);
    }
  }

  await browser.close();
})();