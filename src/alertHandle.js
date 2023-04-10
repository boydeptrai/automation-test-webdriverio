

describe('API Learning', () => {
    let pageUrl = "http://the-internet.herokuapp.com/";
    let jsLinkText = '=JavaScript Alerts';
    let jsConfirmElementSelector = '[onclick="jsConfirm()"]';

    it('Alert Handle',async () => {
        //1. Open the target page
        browser.url(pageUrl);

        //2. Click on alert JS Link
        await $(jsLinkText).waitForDisplayed(5000);
        await $(jsLinkText).click();
        //3.Open/Trigger the alert
        await $(jsConfirmElementSelector).waitForDisplayed(5000);
        await $(jsConfirmElementSelector).click();
        //4.Get alert content
        let alertText = browser.getAlertText();
        console.log('Alert Content:', alertText);
        //5. Click on OK / Accept Alert
        await browser.acceptAlert();
        browser.pause(2000);
        //6.Click on Cancel / Dismiss Alert
        await $(jsConfirmElementSelector).click();

        // Click on Cancel / Dismiss Alert
        await browser.dismissAlert();
        browser.pause(2000);

    });
});