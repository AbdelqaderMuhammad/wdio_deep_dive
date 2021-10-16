const { assert } = require("chai");
const dynamic_controlsPage = require("../../pages/dynamic_controls.page");

describe('wait until', ()=>{
    it('until', ()=>{
        browser.url(`${browser.options.baseUrl}/dynamic_controls`);
        dynamic_controlsPage.clickOnRemoveAddBtn();
        console.log('######' + dynamic_controlsPage.removeAddBtn.getText());
        browser.waitUntil(()=>{
            return dynamic_controlsPage.removeAddBtn.getText() === 'Add';
        }, 6000)
        console.log('######' + dynamic_controlsPage.removeAddBtn.getText());
        assert.equal(`It's gone!`, dynamic_controlsPage.getVerificationMsg())
    })
})
