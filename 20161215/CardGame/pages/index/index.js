//index.js
//获取应用实例

const Renderer = require("../../Renderer");
const Container = require("../../Container");
const Rect = require("../../Rect");


Page({
    onLoad: function () {
        this._renderer = new Renderer();
        this._root = new Container();
        this._context = wx.createContext();

        this._rect = new Rect(100, 100, "#0000ff");
        this._rect.x = 100;
        this._root.addChild(this._rect);
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
