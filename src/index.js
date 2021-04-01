"use strict";
console.log('lets get started');
var CreateButton = /** @class */ (function () {
    function CreateButton(ctaText) {
        var _this = this;
        this.getCtaText = function () {
            return _this.ctaText;
        };
        this.setCtaText = function (text) {
            return _this.ctaText = text;
        };
        this.init = function (buttonSettings) {
            var text = _this.setCtaText(buttonSettings.text);
            return "<a href=\"\" > " + text + " </a>";
        };
        this.ctaText = ctaText;
    }
    return CreateButton;
}());
// let cta = new CreateButton('text' );
// console.log( cta.init( {text : "new btn !"} ) );
