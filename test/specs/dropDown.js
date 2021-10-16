const { assert } = require("chai")
const dropDownPage = require("../pages/dropDown.page")

describe('drop down menu', ()=> {
    it('select first option', ()=> {
        browser.url(`${browser.options.baseUrl}/dropdown`)
        dropDownPage.dropdownMenu.click()
        dropDownPage.firstOpt.click()
        assert.equal(true, dropDownPage.firstOpt.isSelected())
        browser.pause(3000)
    })
})