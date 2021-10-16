const { assert } = require("chai");
const add_removePage = require("../../pages/add_remove.page");


describe('wait for add/remove', ()=>{
    it('add-remove', ()=>{
       browser.url(`${browser.options.baseUrl}/add_remove_elements/`);
       add_removePage.clickOnAddElementBtn();
       add_removePage.deleteBtn.waitForExist();
       assert.equal(true, add_removePage.deleteBtn.isExisting())
     
    })
})
