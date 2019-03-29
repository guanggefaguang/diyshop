Page({
  data: {
    imgUrls: [
      '/image/one.jpg',
      '/image/two.jpg',
      '/image/three.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    beforeColor: 'white',
    afterColor: 'coral'
  },
  onShow: function() {

  },
  goview: function() {
    wx.navigateTo({
      url: './list/list',
    })
  }
})