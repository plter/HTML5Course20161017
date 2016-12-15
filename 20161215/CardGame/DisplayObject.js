/**
 * Created by plter on 2016/12/15.
 */

class DisplayObject {

    constructor() {
        this._x = 0;
        this._y = 0;
        this._visible = true;
    }

    render(context) {
        if (this.visible) {
            context.save();
            context.translate(this.x, this.y);
            this.onDraw(context);
            context.restore();
        }
    }

    onDraw(context) {
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get visible() {
        return this._visible;
    }

    set visible(value) {
        this._visible = value;
    }
}

module.exports = DisplayObject;