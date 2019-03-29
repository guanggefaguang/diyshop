Page({
  data: {
    category: [{
        name: '激光',
        id: 'jiguang'
      },
      {
        name: '礼品',
        id: 'lipin'
      },
      {
        name: '限时',
        id: 'xianshi'
      }
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  onReady() {
    this.setData({
      detail: [{
          id: 'jiguang',
          cate: '激光',
          banner: '../../../image/one.jpg',
          detail:[
            { name: '名字', thumb:'../../../image/c4.png'}
          ]
        },
        {
          id: 'lipin',
          cate: '礼品',
          banner: '../../../image/two.jpg'
        },
        {
          id: 'xianshi',
          cate: '限时',
          banner: '../../../image/three.jpg'
        }
      ]
    })
  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function() {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function() {
      self.setData({
        isScroll: false
      })
    }, 1)

  }

})