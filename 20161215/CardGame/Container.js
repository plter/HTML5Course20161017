/**
 * Created by plter on 2016/12/15.
 */

const DisplayObject = require("./DisplayObject");

class Container extends DisplayObject {

    constructor() {
        super();

        this._children = [];
    }

    addChild(display) {
        if (!this.hasChild(display)) {
            this._children.push(display);
        }
    }

    removeChild(display) {
        let index = this._children.indexOf(display);
        if (index != -1) {
            this._children.splice(index, 1);
        }
    }

    onDraw(context) {
        for (let child of this._children) {
            child.render(context);
        }
    }

    hasChild(display) {
        return this._children.indexOf(display) != -1;
    }
}

module.exports = Container;