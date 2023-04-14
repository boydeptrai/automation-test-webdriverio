

describe('API Learning', () => {
    let pageUrl = "http://the-internet.herokuapp.com/login";
    let formAuthenLinkText = "=Form Authentication";
    let usernameSelector = "#username";
    let passwordSelector = "#password";
    let loginBtn = '[type="submit"]';
    let welcomeTextSelector = 'h2';
    it('Wait for disappeared',async () => {
        //1. Open the target page
        browser.url(pageUrl);

        //2. Input username and password
        await $(usernameSelector).waitForDisplayed(5000);
        await $(usernameSelector).setValue('tomsmith');
        await $(passwordSelector).setValue('SuperSecretPassword!');

        //3. Click on the [Login] button
         $(loginBtn).click();
        //4.wait until the [Login ] button disappeared
        await $(loginBtn).waitForDisplayed(5000,true,'[ERR] login process takes longer than 5s');
        //5. Get the h1 text content and print out
        let welcomeText = await $(welcomeTextSelector).getText();

        console.log(welcomeText)
    });
});