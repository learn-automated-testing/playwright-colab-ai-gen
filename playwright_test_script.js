Here is a JavaScript Playwright script following your instructions:

```js
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigates to the webpage
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');

  // Waits for the checkbox to load
  await page.waitForSelector('#checkbox1');
  await page.waitForSelector('#checkbox2');

  // Selects each checkbox
  await page.click('#checkbox1');
  await page.click('#checkbox2');

  // Verifies if selecting the checkbox displays a smiley or bad smiley 
  const result1 = await page.$eval('#checkbox1', element => element.checked);
  const result2 = await page.$eval('#checkbox2', element => element.checked);

  console.log('Checkbox 1 is ' + (result1 ? 'checked' : 'not checked'));
  console.log('Checkbox 2 is ' + (result2 ? 'checked' : 'not checked'));

  // Additional validation can implement here depending on exact webpage behavior.
  // For example, if checking the checkbox changes the className of the result div, you can implement that as validation.

  await browser.close();
})();
```

Please replace the css selectors and URLs with the actually ones as the provided HTML doesn't have any smiley elements and URL is not navigable.

Again, you may need to add more validation checks depending on the specific behavior of the webpage you are testing.