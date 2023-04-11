describe('API Learning', () => {
    let pageUrl = "http://the-internet.herokuapp.com/login";
    let usernameSelector = "#username";
    it('Get Attribute for username text box',async () => {
        // Open the target page
        browser.url(pageUrl);
        // get all desired attribute
        await $(usernameSelector).waitForDisplayed(5000);

        let typeAtt =await $(usernameSelector).getAttribute('type');
        let nameAtt =await $(usernameSelector).getAttribute('name');
        let idAtt =await $(usernameSelector).getAttribute('id');

        console.log('TYPE:', typeAtt);
        console.log('NAME:', nameAtt);
        console.log('ID:',idAtt)

    });
});