/**
 * Created by plter on 2016/12/15.
 */

const Container = require("./Container");
const Rect = require("./Rect");
const Text = require("./Text");

class Card extends Container {

    constructor(width, height, num) {
        super();

        this._width = width;
        this._height = height;

        //create recto
        this._recto = new Container();
        this._recto.addChild(new Rect(width, height, "#ff0000"));
        this._text = new Text(num + "", 30, "#ffffff");
        this._text.x = 17;
        this._text.y = 5;
        this._recto.addChild(this._text);
        this.addChild(this._recto);

        //create verso
        this._verso = new Rect(width, height, "#0000ff");
        this.addChild(this._verso);

        this.showRecto();
    }

    showRecto() {
        this._recto.visible = true;
        this._verso.visible = false;
    }

    showVerso() {
        this._verso.visible = true;
        this._recto.visible = false;
    }

    get rectoVisible() {
        return this._recto.visible;
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
}

module.exports = Card;