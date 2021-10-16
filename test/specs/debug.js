const { assert } = require("chai");
const loginData = require("../data/loginData.js");
const loginPage = require("../pages/login.page.js");

describe('suite for debugging command', ()=>{

    it('try the debug command', ()=>{
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName(loginData.validUserName);
        loginPage.enterPassword(loginData.validPassword);
        let userName = loginPage.userName.getValue();
        let password = loginPage.password.getValue();
        console.log('## user name is ' + userName + '## password is ' + password);
        browser.debug();
    })
})