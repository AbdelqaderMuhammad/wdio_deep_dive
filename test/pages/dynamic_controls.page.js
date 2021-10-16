class DynamicControl {
    get inputHolder() { return $('form#input-example  input')}
    get enableDisableBtn() { return $('form#input-example  button')}
    get verificationMsg() { return $('#message') }
    get removeAddBtn() { return $('form#checkbox-example  button')}
    get checkBox(){ return $('input#checkbox')}

    

    clickOnEnableDisableBtn(){
        this.enableDisableBtn.waitForDisplayed();
        this.enableDisableBtn.click();
    }

    clickOnRemoveAddBtn(){
        this.removeAddBtn.waitForDisplayed();
        this.removeAddBtn.click();
    }

    getVerificationMsg(){
        this.verificationMsg.waitForDisplayed();
        return this.verificationMsg.getText();
    }


}

module.exports = new DynamicControl();