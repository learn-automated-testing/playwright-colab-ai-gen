```javascript
const { chromium } = require('playwright');

(async () => {
  // Initialize new browser instance
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Go to the webpage
  await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');
  
  // Wait for the checkboxes appear in the page.
  await page.waitForSelector('#checkbox1');
  await page.waitForSelector('#checkbox2');
  
  // Select the checkboxes
  const checkboxIds = ['checkbox1', 'checkbox2'];
  for (let id of checkboxIds) {
    // Check the checkbox
    await page.check(`#${id}`);

    // Verify the display after checking the checkbox
    const isSmiley = await page.evaluate(() => {
      // Access to the result element
      const result = document.getElementById("result");
      
      // Confirm if it displays a smiley
      const smiley = result.innerHTML.includes("smiley");

      return smiley;
    });
    
    console.log(`Checkbox ${id}: ${ isSmiley ? 'smiley' : 'bad smiley' }`);

    // uncheck before moving to the next one
    await page.uncheck(`#${id}`);
  }
  
  // Close the browser
  await browser.close();
})();
```
The code is a simplified example of using the Playwright library for automated browser testing. The script launches a new instance of a browser, goes to the website, waits for the checkboxes to load, selects each of them one by one and validates the outcome by analyzing the inner HTML of the "result" element. If a smiley is returned after checking a checkbox it logs 'smiley', otherwise 'bad smiley'. After the checking and validation, it deselects the checkbox before moving to the next one. At the end the browser is closed.