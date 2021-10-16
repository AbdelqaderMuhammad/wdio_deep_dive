class KeyPresses {

    get inputBar() { return $('#target')}
    get keyPressed() { return $('#result') }

    setValue(char){
        this.inputBar.waitForDisplayed();
        this.inputBar.setValue(char);
    }

    getKeyPressed(){
        this.keyPressed.waitForDisplayed();
        return this.keyPressed.getText();
    }

    sendKeysToTarget(text) {
        this.inputBar.waitForDisplayed()
        this.inputBar.keys(text)
    }

    clickTarget() {
        this.inputBar.waitForDisplayed()
        this.inputBar.click()
    }


}

module.exports = new KeyPresses();
