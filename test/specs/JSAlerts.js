const { assert } = require("chai");
const JSAlertsPage = require("../pages/JSAlerts.page");

describe('suite for JS alerts', ()=>{
    it('texted alert', ()=>{
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        browser.$('.example li:nth-child(1) button').click();
        assert.equal('I am a JS Alert', browser.getAlertText());
    })

    it('confirmed alert', ()=>{
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        browser.$('.example li:nth-child(2) button').click();
        browser.pause(2000);
        browser.acceptAlert();
        browser.pause(2000);
    })

    it('Dismiss alert', ()=>{
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        browser.$('.example li:nth-child(2) button').click();
        browser.pause(2000);
        browser.dismissAlert()
        browser.pause(2000);
    })


    it('prometed alert', ()=>{
        browser.url(`${browser.options.baseUrl}/javascript_alerts`);
        browser.$('.example li:nth-child(3) button').click();
        browser.pause(2000);
        browser.sendAlertText('Hello This is abdelqader')
        browser.acceptAlert();
        browser.pause(2000);
    })
})