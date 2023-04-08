


describe('API Learning ', () => {

    let pageUrl = 'http://the-internet.herokuapp.com/dropdown';
    let dropDownSelector = '#dropdown';
    it('Handle dropdown Menu',async () => {
        // [1] Open the target page
        browser.url(pageUrl);
        // [2] Select [Option 1] from the dropdown menu
        await $(dropDownSelector).waitForDisplayed(5000)
        await (await $(dropDownSelector)).selectByVisibleText('Option 1');
        // [3] pause the little to see result

        browser.pause(2000)

        //[4] Select [Option 2] by using selectByAttribute
        await $(dropDownSelector).selectByAttribute('value', '2');

        // [5] Pause the little to see result
        browser.pause(4000);
    });
});