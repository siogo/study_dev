// pages/play/play.js
const innerAudioContext = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:'',
    id:'',
    playurl:'',
    songName:'',
    nowtime:'00:00',
    duration:'--:--',
    isPlay:false,
    slidernowtime:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgurl:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://api.bzqll.com/music/tencent/pic?key=579621905&id='+options.id,
      songName: options.songName
    })
    // this.audioCtx = wx.createAudioContext('audio', this);
    // this.audioCtx.setSrc()
    innerAudioContext.src = 'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://api.bzqll.com/music/tencent/url?key=579621905&id=' + options.id + '&br=192';
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

  audioPlay(){
    console.log(innerAudioContext.duration)
    let that = this
    innerAudioContext.play();
    this.setData({
      isPlay: true
    })
    // onPlay事件触发刷新播放时间
    innerAudioContext.onPlay((res)=>{
      that.nowTime();
    })
  },
  audioPause(){
    innerAudioContext.pause();
    this.setData({
      isPlay: false
    })
  },
  audio14(){
    this.audioCtx.seek(14);
  },
  audioStart(){
    this.audioCtx.seek(0);
  },
  nowTime(){
    var that = this
    innerAudioContext.onTimeUpdate((res) => {
      let now = innerAudioContext.currentTime.toString().split('.')[0];
      let str = '';
      if(now%60<10){
        str = '0'+Math.floor(now/60).toString()+":0"+(now%60).toString();
      }else{
        str = '0' + Math.floor(now / 60).toString() + ":" + (now % 60).toString();
      }
      that.setData({
        duration: innerAudioContext.duration.toString().split('.')[0],
        nowtime: str,
        slidernowtime:now
      })
    })
  },
  slidebar(e){
    
  }
})