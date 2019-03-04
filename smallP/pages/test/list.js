// pages/test/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    listData:[],
    songSrc:'',
    songName:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.swiperData = [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
    var that = this;
    wx.request({
      url: 'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://api.bzqll.com/music/tencent/search?key=579621905&s=%E9%99%88%E5%A5%95%E8%BF%85&num=10&page=1',
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success: function(res){
        console.log(res.data.data)
        let songmid = ''
        let songName = ''
        that.setData({
          listData: res.data.data,
          songSrc: '',
          songName:songName
        })
      }
    })
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

  showId:function(e){
    console.log(e)
    let id = e.target.id
    let name = e.target.dataset.songname;
    wx.navigateTo({
      url: '../play/play?id=' + id + '&songName=' + name,
    })
    
  }
})