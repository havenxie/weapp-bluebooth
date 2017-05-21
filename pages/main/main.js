// main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      textValue: "",
      searchBtnLoading: false,
      searchBtnEnable: true,
      connectBtnLoading: false,
      connectBtnEnable: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindInput: function(e) {
      console.log(e.detail.value);
      this.setData({
          textValue: e.detail.value,
      });
  },

  bindConfirm: function(e) {
      console.log(e.detail.value);
      this.setData({
          textValue : e.detail.value,
      });
  },
  bindSearchBtn : function() {
      this.setData({
          searchBtnLoading: !this.data.searchBtnLoading
      })
      if(this.data.searchBtnLoading) {
          wx.openBluetoothAdapter({
              success: function(res) {
                  console.log(res);
                  wx.showToast({  
                      title: "初始化蓝牙适配器成功,正在搜索",  
                      duration: 2000  
                  }) 
              },
              fail: function(err) {
                  wx.showModal({
                      title: "打开蓝牙失败",
                      content: err.errMsg,
                      showCancel: false,
                  });
              }
          })
      } else {
          wx.closeBluetoothAdapter({
              success: function(res) {
                console.log(res);
              },
              fail: function(err) {
                console.log(err.errMsg);
              }
          })
      }
  },
  bindSendMsgBtn: function () {
      console.log(this.data.textValue);
  }
})