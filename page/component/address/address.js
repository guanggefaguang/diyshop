// page/component/new-pages/user/address/address.js
Page({
  data: {
    address: {
      name: '',
      phone: '',
      detail: ''
    },
    region: [],
  },
  onLoad() {
    var self = this;

    wx.getStorage({
      key: 'address',
      success: function(res) {
        self.setData({
          address: res.data
        })
      }
    })
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit(e) {
    const value = e.detail.value;
    if (value.name && value.phone && value.detail) {
      wx.setStorage({
        key: 'address',
        data: value,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  }
})