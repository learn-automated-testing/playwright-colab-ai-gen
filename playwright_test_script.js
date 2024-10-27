const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://practiceautomatedtesting.com/webelements/Checkboxes');
    
    const checkbox1 = await page.$('#checkbox1');
    const checkbox2 = await page.$('#checkbox2');
    const result = await page.$('#result');
   
    await checkbox1.check();
    let resultText = await page.$eval('#result', el => el.textContent);
    if(resultText !== "smiley" && resultText !== "bad smiley"){
        console.log('Error: Unexpected result after checking checkbox 1.')
    }
  
    await checkbox1.uncheck();
    await checkbox2.check();
    resultText = await page.$eval('#result', el => el.textContent);
    if(resultText !== "smiley" && resultText !== "bad smiley"){
        console.log('Error: Unexpected result after checking checkbox 2.')
    }
    
    await browser.close();
})();