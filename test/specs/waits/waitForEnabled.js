const { assert } = require("chai");
const dynamic_controlsPage = require("../../pages/dynamic_controls.page");

describe('wait for enable/disable', ()=>{
    it('enable', ()=>{
       browser.url(`${browser.options.baseUrl}/dynamic_controls`);
       dynamic_controlsPage.clickOnEnableDisableBtn();
       dynamic_controlsPage.inputHolder.waitForEnabled();
       assert.equal(`It's enabled!`, dynamic_controlsPage.getVerificationMsg())
       dynamic_controlsPage.clickOnEnableDisableBtn();
       dynamic_controlsPage.inputHolder.waitForEnabled(true);
       assert.equal(`It's disabled!`, dynamic_controlsPage.getVerificationMsg())
    })
})
