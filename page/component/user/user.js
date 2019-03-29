// page/component/new-pages/user/user.js
Page({
  data: {
    thumb: '',
    nickname: '',
    orders: [
      { 
        thumb:'../../../image/s4.png',
        number:'7316478136489638',
        name:'正宗原生态花生',
        count:'5',
        deliver:'北京市西城区XXXX',
        status:'已发货'
      }
    ],
    hasAddress: false,
    address: {}
  },
  onLoad() {
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
  },
  onShow() {
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function(res) {
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },
  /**
   * 发起支付请求
   */
  payOrders() {
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        wx.showModal({
          title: '支付提示',
          content: '<text>',
          showCancel: false
        })
      }
    })
  }
})