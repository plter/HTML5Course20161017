//index.js
//获取应用实例

const Renderer = require("../../Renderer");
const Container = require("../../Container");
const Rect = require("../../Rect");
const Text = require("../../Text");
const Card = require("../../Card");


Page({
    onLoad: function () {
        this._renderer = new Renderer();
        this._root = new Container();
        this._context = wx.createContext();

        this._rect = new Card(50, 50, 2);
        this._rect.x = 0;
        this._root.addChild(this._rect);
    },

    canvasTapHandler: function (event) {
        if (this._rect.rectoVisible) {
            this._rect.showVerso();
        } else {
            this._rect.showRecto();
        }
    },

    onReady: function () {
        console.log("onReady");

        this._renderer.addRenderHandler(function () {
            this._context.clearActions();
            this._root.render(this._context);
            wx.drawCanvas({
                canvasId: "game",
                actions: this._context.getActions()
            });
        }.bind(this));
        this._renderer.start();
    },
    onUnload: function () {
        console.log("onUnload");

        this._renderer.stop();
    }
});
