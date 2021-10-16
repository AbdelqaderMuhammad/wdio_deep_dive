const internetPage = require('../pages/internet.page')

// isDisplay()
// isEnabled()
// isDisplayedInViewPort()
// isExisting() 


describe("states of the elements", function () {
    it("Is element displayed", () => {
        browser.url('/')
        console.log(internetPage.pageFooter.isDisplayed());
        console.log(internetPage.pageFooter.isEnabled());
        console.log(internetPage.pageFooter.isDisplayedInViewport());
        console.log(internetPage.pageFooter.isExisting());
    })
})