describe('API Learning', () => {
    const MAX_WAIT_TIME = 5000;

    let pageUrl = "http://the-internet.herokuapp.com/";
    let formAuthenLinkText = '=Form Authentication';
    let usernameSelector = '#username';
    let passwordSelector = '#password';

    let loginBtn = '[type="submit"]';
    it('Click on Link Text',async () => {
        // [1] Open the index page
        browser.url(pageUrl)
        // [2] Click on [Form Authentication] Link Text
        await $(formAuthenLinkText).waitForDisplayed(MAX_WAIT_TIME)
        await $(formAuthenLinkText).click();
        // [3] Input username and password
        await $(usernameSelector).waitForDisplayed(MAX_WAIT_TIME);
        await $(usernameSelector).setValue('Tuan Tran');
        await $(passwordSelector).setValue('123456');
        // [4] Click ont the Login Button
        await $(loginBtn).click();

        browser.pause(3000);
    });
});