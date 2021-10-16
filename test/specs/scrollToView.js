const { assert } = require("chai");
const internetPage = require("../pages/internet.page");

describe('suite for scrolling', ()=>{
    it('scroll to the footer of the page', ()=>{
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed();
        internetPage.pageFooter.scrollIntoView()
        internetPage.scrolToPageFooter();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })
})