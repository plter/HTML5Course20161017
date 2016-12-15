/**
 * Created by plter on 2016/12/15.
 */

class Renderer {

    constructor() {
        this._timerRunning = false;
        this._renderHandlers = [];
    }

    start() {
        if (!this.timerRunning) {
            this._timerId = setInterval(() => {
                for (let handler of this._renderHandlers) {
                    handler();
                }
            }, 20);
            this._timerRunning = true;
        }
    }

    stop() {
        if (this.timerRunning) {
            clearInterval(this._timerId);
            this._timerRunning = false;
        }
    }

    /**
     *
     * @param {Function} handler
     */
    addRenderHandler(handler) {
        if (this._renderHandlers.indexOf(handler) == -1) {
            this._renderHandlers.push(handler);
        }
    }

    /**
     *
     * @param {Function} handler
     */
    removeRenderHandler(handler) {
        let index = this._renderHandlers.indexOf(handler);
        if (index != -1) {
            this._renderHandlers.splice(index, 1);
        }
    }

    get timerRunning() {
        return this._timerRunning;
    }
}

module.exports = Renderer;