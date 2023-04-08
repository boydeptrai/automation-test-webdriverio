describe('API Learning', () => {
    let pageUrl = "http://the-internet.herokuapp.com/";
    let welcomeTextSelector = "h1";
    let currentUrl = "";
    let currentPageTitle = "";
    it('getUrl and getTitle API',async () => {
        // [1] Open the target page
        browser.url(pageUrl);
        await $(welcomeTextSelector).waitForDisplayed(5000);
        // [2] get the current page url and print out
        currentUrl =await browser.getUrl()
        // [3] get the current page title and print out
        currentPageTitle =await browser.getTitle()

        console.log('currentUrl:', currentUrl);
        console.log('currentPageTitle:', currentPageTitle)

    });
});