class DropDown {

    get firstOpt() { return $('#dropdown option:nth-child(2)')}
    get secondOpt() { return $('#dropdown option:nth-child(3)')}
    get dropdownMenu() { return $('#dropdown') }


}

module.exports = new DropDown();