const { assert } = require("chai");
const iFramsPage = require("../pages/iFrams.page");

describe('switch to windows and iFramss',()=>{
    it('switch windows', ()=>{
        browser.newWindow('https://www.google.com')
        browser.newWindow('https://webdriver.io')
        browser.pause(2000);
        browser.switchWindow('google')
    })

    it.only('iframe switch function', ()=> {
        browser.url(`${browser.options.baseUrl}/iframe`)
        iFramsPage.iframeID.isDisplayed();
        browser.switchToFrame(iFramsPage.iframeID);
        iFramsPage.iframeBody.click()
        iFramsPage.iframeBody.clearValue();
        iFramsPage.iframeBody.setValue('Hello');
        assert.equal('Hello', iFramsPage.iframeBody.getText())
    })
})