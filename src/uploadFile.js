let path = require('path')

describe('API Learning', () => {
     let pageUrl = "http://the-internet.herokuapp.com/upload";
     let chooseFileSelector = "#file-upload";
     let uploadBtnSelector = "#file-submit";
    it('Upload File',async () => {
        //1. Open the target page
        browser.url(pageUrl);
        //2. setValue for File's path
        let fileToUploadRelativePath = path.join(__dirname,'./toupload');
        await $(chooseFileSelector).waitForDisplayed(5000)
        await $(chooseFileSelector).setValue(fileToUploadRelativePath);
        //3.  Click on [Upload button]

        await $(uploadBtnSelector).click();
        //4.  pause a little to see the result
        browser.pause(3000);
    });
});