class Login {
    get userName() { return $('#username')}
    get password() { return $('#password')}
    get successMsg() { return $('#flash')}
    get loginBtn() {return $('.radius')}

    enterUserName(text){
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    getSuccessMsg(){
        this.successMsg.waitForDisplayed();
        return this.successMsg.getText();
    }

    clickOnLoginBtn(){
        this.loginBtn.waitForDisplayed();
        this.loginBtn.click();
    }

}

module.exports = new Login();