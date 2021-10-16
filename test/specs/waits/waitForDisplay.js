const { assert } = require("chai");
const internetPage = require("../../pages/internet.page");

describe('wait for display', ()=>{
    it('scroll to the footer of the page', ()=>{
        browser.url('/');
        internetPage.pageHeader.waitForDisplayed(1000, true);
        internetPage.scrolToPageFooter();
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(5000)
    })

    it.skip('should scroll into view', () => {
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(3000)
    })

})
/* 
The waitForDisplayed is especially useful if you are just launching your browser, 
or if you have just completed some action.

The waitForDisplayed command is very useful when you are on a slow internet or 
if resources take long to load. */