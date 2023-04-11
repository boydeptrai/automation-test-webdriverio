


describe('API Learning', () => {
    let pageUrl = "https://webdriver.io/docs/api.html";
    let editBtnSelector = ".theme-edit-this-page";
    it('Handle Multiple Window',async () => {
        // 1. Open the target page
        browser.url(pageUrl);

        // 2. Click on the Edit Button
        await $(editBtnSelector).waitForDisplayed(5000);
        await $(editBtnSelector).click();
        // 3. Get all the window ID/ Array
        let allWindowIds =await browser.getWindowHandles();
        console.log(allWindowIds)

        let firstWindowId = allWindowIds[0];
        let secondWindowId = allWindowIds[1];
        // 4. Switch the second window tab
        await browser.switchToWindow(secondWindowId);
        // 5. Print out the 2nd window's title
        let secondWindowTitle =await browser.getTitle();
        console.log('2nd window Title:',secondWindowTitle);
        // 6. Switch to the 1st window
        await browser.switchToWindow(firstWindowId)
        // 7. Print out the 1st window's title
        let firstWindowTitle =await browser.getTitle();
        console.log('1st window Title:', firstWindowTitle);
        // 8. pause(3000)
        browser.pause(3000);
    });
});