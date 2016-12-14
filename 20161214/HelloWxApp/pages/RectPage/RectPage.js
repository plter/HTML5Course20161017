// pages/RectPage/RectPage.js

var Rect = require("./Rect");

Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.context = wx.createContext();
    this._rect = new Rect();
  },

  getActions: function () {
    this.context.clearActions();
    this._rect.draw(this.context);

    return this.context.getActions();
  },

  startRenderer: function () {
    this._timerId = setInterval(() => {
      wx.drawCanvas({
        canvasId: 'game',
        actions: this.getActions()
      })
    }, 20);
  },

  stopRenderer:function(){
    clearInterval(this._timerId);
  },

  onReady: function () {
    // 页面渲染完成
    this.startRenderer();
  },
  onUnload: function () {
    // 页面关闭
    this.stopRenderer();
  }
})