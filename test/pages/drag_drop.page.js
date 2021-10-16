class DragAndDrop {

    get firstCol() { return $('#column-a')}
    get SecCol() { return $('#column-b')}
    get firstColHeader() { return $('#column-a header')}
    get SecColHeader() { return $('#column-b header')}


}

module.exports = new DragAndDrop();