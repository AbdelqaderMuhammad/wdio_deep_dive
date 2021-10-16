const { assert } = require("chai");
const drag_dropPage = require("../pages/drag_drop.page");

// this is an issue 
describe('Drag and drop feature', ()=> {
    it.only('drag a into b', ()=>{
       browser.url(`${browser.options.baseUrl}/drag_and_drop`);
       drag_dropPage.firstCol.waitForDisplayed();
       drag_dropPage.firstCol.dragAndDrop(drag_dropPage.SecCol);
       assert.equal('B', drag_dropPage.firstColHeader.getText())

    })

    it('Should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        browser.$('#draggable').dragAndDrop(browser.$('#droppable'))
        assert.equal('Dropped!', browser.$('#droppable p').getText())
    })

})