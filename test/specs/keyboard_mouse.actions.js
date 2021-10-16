const { assert } = require("chai");
const hoverPage = require("../pages/hover.page");
const keyPressesPage = require("../pages/keyPresses.page");

describe('this is a tutorial for keyboards and mouse actions', ()=> {
    it('move to function', ()=>{

        browser.url(`${browser.options.baseUrl}/hovers`);
        hoverPage.hoverOnFigure(3);
        assert.equal("name: user1", hoverPage.getFigureDetailsText(3));
    })

    /* it('set values function', ()=>{
        let character = 'A'
        browser.url(`${browser.options.baseUrl}/key_presses`);
        keyPressesPage.setValue(character);
        assert.equal(`You entered: ${character}`, keyPressesPage.getKeyPressed());
    }) */

    it('keys function', ()=>{
        let keyboardValue = 'Backspace'
        browser.url(`${browser.options.baseUrl}/key_presses`);
        keyPressesPage.clickTarget();
        keyPressesPage.sendKeysToTarget(keyboardValue)
        assert.equal(`You entered: BACK_SPACE`, keyPressesPage.getKeyPressed());
    })
})