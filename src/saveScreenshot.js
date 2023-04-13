describe('API Learning', () => {
    let pageUrl = "https://webdriver.io/docs/api/browser/saveScreenshot.html";
    let screenShotPath = './src/screenShots/saveScreenshot.png';
    it('Save Screenshot',async () => {
        //1. open the target page
        browser.url(pageUrl);
        //2. Take screenshot and save to somewhere
        await browser.saveScreenshot(screenShotPath);
    });
});