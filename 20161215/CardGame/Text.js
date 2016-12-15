/**
 * Created by plter on 2016/12/15.
 */

const DisplayObject = require("./DisplayObject");

class Text extends DisplayObject {

    constructor(string, fontSize = 12, color = "#000000") {
        super();

        this._string = string;
        this._fontSize = fontSize;
        this._color = color;
    }


    onDraw(context) {
        context.setFontSize(this.fontSize);
        context.setFillStyle(this.color);
        context.fillText(this.string, 0, this.fontSize);
    }


    get string() {
        return this._string;
    }

    set string(value) {
        this._string = value;
    }


    get fontSize() {
        return this._fontSize;
    }

    set fontSize(value) {
        this._fontSize = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}

module.exports = Text;