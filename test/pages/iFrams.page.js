class IFrames {

    get iframeID() { return $('#mce_0_ifr') }
    get iframeBody() { return $('#tinymce') }


}

module.exports = new IFrames();