// page/component/details/details.js
Page({
  data: {
    goods: {
      id: 1,
      image: '/image/goods1.png',
      title: '新鲜梨花带雨上课看不不舒服乱收费看见了代付款是劳动法的晟盾晟盾上',
      none: true,
      price: 300.64,
      parameter: '125g/个',
    },
    imgUrls: [{
        image: "../../../image/one.jpg"
      },
      {
        image: "../../../image/two.jpg"
      },
      {
        image: "../../../image/three.jpg"
      },
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    beforeColor: 'white',
    afterColor: 'coral'
  },
  Gohref() {
    wx.navigateTo({
      url: '../orders/orders',
    })
  }
})