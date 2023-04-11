
describe('API Learning', () => {
    let pageUrl = "http://the-internet.herokuapp.com/";
    let welcomeTextSelector = "h1";
   it('Get color CSS value',async () => {
    //1. Open the target page
    browser.url(pageUrl);
    //2. Get the color css 
    await $(welcomeTextSelector).waitForDisplayed(5000);
    let valueColor = await $(welcomeTextSelector).getCSSProperty('color')
    //3. Print out the color css value
    console.log('Color value:',valueColor.parsed.hex);
   });
});