// pages/RectPage/RectPage.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成

    var context = wx.createContext();
    
    context.setFillStyle("#ff0000");
    context.beginPath();
    context.rect(0,0,100,100);
    context.closePath();
    context.fill();

    wx.drawCanvas({
      canvasId: 'game',
      actions: context.getActions()
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})