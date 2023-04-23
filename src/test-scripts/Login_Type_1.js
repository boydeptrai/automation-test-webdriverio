const LoginPage= require("../page-objects/LoginPage_Type_1");

describe('Login type 01', () => {
    it('Login to the page',async () => {
        browser.url("http://the-internet.herokuapp.com/login")
         LoginPage.waitForUsernameDisplayed();
        await LoginPage.username.setValue('ABC');
        await LoginPage.password.setValue('abc');
        await LoginPage.loginBtn.click();
    });
});