const { chromium } = require('playwright'); // We're using chromium but passing Chrome executable path

(async () => {
  // Launch Google Chrome instead of the default Chromium
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Replace with your Chrome executable path
    headless: false, // Change to true if you want it to run in headless mode
  });
  
    const page = await browser.newPage();
    await page.goto('https://github.com/jawadhassan100/Python-Selenium-Automation');
    await page.screenshot({ path: 'selenium.png' });
    await browser.close();
  })();
