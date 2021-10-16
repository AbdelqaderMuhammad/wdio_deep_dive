class JSAlerts {

    JSAlertButton() { return $(`.example li:nth-child(${index}) button`)}


    clickJavascriptAlertButton(index) {
        this.JSAlertButton(index).waitForDisplayed()
        this.JSAlertButton(index).click()
    }

}
module.exports = new JSAlerts();