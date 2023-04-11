const path  = require('path')
describe('API Learning', () => {
    it('alert handle',async () => {
       let pageUrl = "http://the-internet.herokuapp.com/";
       let jsLinkText = "=JavaScript Alerts";
       let jsConfirmElementSelector = '[onclick="jsConfirm()"]';

       //1. Open page
       browser.url(pageUrl);
       //2. Click on Alert JS Link
       await $(jsLinkText).waitForDisplayed(5000);
       await $(jsLinkText).click();

       //3.Open/trigger the alert
       await $(jsConfirmElementSelector).waitForDisplayed(5000);
       await $(jsConfirmElementSelector).click();
       //4.get  alert  content
       let alertText = await  browser.getAlertText();
       console.log('Alert Content:', alertText);
       //5. Click On Ok / Accept Alert
       await browser.acceptAlert();
       browser.pause(2000);
       //6. Click on the alert    
       await $(jsConfirmElementSelector).click();
       //7. Click on Cancel / Dismiss Alert
       await browser.dismissAlert();

       browser.pause(3000);

    });
    it('uploadFile',async () => {
        let pageUrl ="http://the-internet.herokuapp.com/upload";
        let chooseFileSelector = '#file-upload';
        let uploadBtnSelector = '#file-submit'

        //1. Open the target page
        browser.url(pageUrl);
        //2. setValue for File's Path
        let fileToUploadRelativePath = path.join(__dirname,'./toupload');
        await $(chooseFileSelector).waitForDisplayed(5000);
        await $(chooseFileSelector).setValue(fileToUploadRelativePath);
        //3. onClick [Upload Button]
        await $(uploadBtnSelector).click();

        //4. pause a little to see the result
        browser.pause(3000);
    });
});