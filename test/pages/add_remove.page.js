class ADD_REMOVE_ELEMENT {
    get addElementBtn() { return $('//div/button')}
    get deleteBtn() { return $('#elements button')}



    clickOnAddElementBtn(){
        this.addElementBtn.waitForDisplayed();
        this.addElementBtn.click();
    }

}

module.exports = new ADD_REMOVE_ELEMENT();