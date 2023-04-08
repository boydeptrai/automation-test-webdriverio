describe('API Learning', () => {
    let pageUrl = 'http://the-internet.herokuapp.com/dropdown';
    let highlightTextSelection = "h3";
    let currentHighlightText;
    it('Learn getText API',async () => {
        // [1] Open the target page
        browser.url(pageUrl);
        // [2] Get the highlight Text from the page
        await $(highlightTextSelection).waitForDisplayed(5000);
        currentHighlightText =await  $(highlightTextSelection).getText();

        console.log(await currentHighlightText)
        // [3] pause a little to see the result

        browser.pause(2000)
    });
});