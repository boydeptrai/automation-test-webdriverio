const { $ } = require("webdriverio/build/commands/browser");


describe('Learning API', () => {
    let loginUrl = 'http://the-internet.herokuapp.com/login';
    let usernameSelector = '#username';
    let passwordSelector = '#password';
    it('waitForDisplayed', () => {
        // [1] Open the  login
        browser.url(loginUrl);
        // [2] wait for the username text box display
        $(usernameSelector).waitForDisplayed(5000);
        // [3] Input username and password
        $(usernameSelector).getValue('Tuan Tran');
        $(passwordSelector).getValue('123456')

        //[4] pause a little to see the result

         browser.pause(2000)
    });
});