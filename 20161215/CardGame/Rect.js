/**
 * Created by plter on 2016/12/15.
 */

const DisplayObject = require("./DisplayObject");

class Rect extends DisplayObject {
    constructor(width, height, color) {
        super();
        this._width = width;
        this._height = height;
        this._color = color;
    }

    onDraw(context) {
        context.setFillStyle(this.color);
        context.beginPath();
        context.rect(0, 0, this.width, this.height);
        context.closePath();
        context.fill();
    }


    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}

module.exports = Rect;