
class Internet {
    get pageHeader() {return $('h1.heading')}
    get subHeading() { return $('h2') }
    get pageFooter() { return $('#page-footer') }
    get parentList() {return $('ul')}
    get childList() { return this.parentList.$$('li')}
    

    childListElement(index) { 
        return this.parentList.$(`li:nth-child(${index})`)
    }

    getTextForListElement(index){
        return this.childListElement(index).getText();
    }
    getLiText() {
        this.childList.filter( element => {
            console.log(element.getText())
        })
    }
    getLiElement(index){
        return this.childListElement(index);
    }
    checkBoxBy(index){
        return browser.$(`//form/input[${index}]`);
    }
    clickOnCheckBox(index){
        this.checkBoxBy(index).waitForDisplayed();
        this.checkBoxBy(index).click();
    }

    scrolToPageFooter() {
        this.pageFooter.isDisplayed();
        this.pageFooter.moveTo();
    }
    
}


module.exports = new Internet(); 