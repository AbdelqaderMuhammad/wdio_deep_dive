const internetPage = require('../pages/internet.page')

describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('http://the-internet.herokuapp.com/')
        let text = $('.heading').getText(); // using css selector
        let text2 = $('//div/h2').getText(); // using xpath
        $('=Context Menu').click(); // to select an element by using lint text.

        console.log(text + ' ### '  + text2);
        browser.pause(2000);
    })

    it('working on page object', ()=>{
        browser.url('/')
        console.log(internetPage.pageHeader.getText());
        console.log(internetPage.subHeading.getText());
        console.log(internetPage.pageFooter.getText());
    })

    it('get all the text in all element', ()=>{
        browser.url('/')
        internetPage.getLiText();
    })

    it.only('get a specific text in all element', ()=>{
        browser.url('/')
        console.log(internetPage.getTextForListElement(2));
    })
})