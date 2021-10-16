const { expect, assert } = require("chai");
const loginData = require("../data/loginData");
const internetPage = require("../pages/internet.page");
const loginPage = require("../pages/login.page");
const logingPage = require("../pages/login.page");


describe('clicking on an element', ()=>{
    it('click on the first element', ()=>{
        browser.url('/')
        browser.$('=A/B Testing').click();
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
        browser.pause(2000);
    })

    it('check boxes', ()=>{
        browser.$('=Checkboxes').click();
        internetPage.clickOnCheckBox(1);
        expect(internetPage.checkBoxBy(1).isSelected()).equals(true); 
    })

    it('login', ()=> {
        browser.$('=Form Authentication').click();
        logingPage.enterUserName('Abdelqader')
        assert.equal('Abdelqader', logingPage.userName.getValue())
        logingPage.enterPassword('Password')
        assert.equal('Password', logingPage.password.getValue())
        logingPage.userName.clearValue();
        logingPage.password.clearValue();
        // console.log('this is the value ' + logingPage.userName.getValue)
        expect(logingPage.userName.getValue()).equals(``);
        expect(logingPage.password.getValue()).equals(``);
    })

    it.only('', ()=> {
        browser.url(`${browser.options.baseUrl}/login`)
        logingPage.enterUserName(loginData.validUserName);
        logingPage.enterPassword(loginData.validPassword);
        loginPage.clickOnLoginBtn();
        const validationTxt = browser.execute(()=>{
            const text = document.getElementById('flash')
            return text.outerText;
        })
        assert.equal(validationTxt.trim(), logingPage.getSuccessMsg())
    })    

    
})

