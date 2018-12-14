/**
 * createTime: 2018/12/14
 * owner: Renyi
 */

//隐藏分享弹出框
window.addEventListener('popstate', function (e) {
  $('.more-bar').removeClass('more-show').css('display', 'none');
}, false)

//显示分享弹出框
$('#moreBtn').click(function (e) {
  $('.more-bar').css('display', 'block').addClass('more-show');
  history.pushState({}, '', location.href + '?bar=show')
})

//点击下载视频
$('#downVideo').click(function () {
  webkit.messageHandlers.videoDownload.postMessage(JSON.stringify({url: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4', name: 'mov_bbb'}));
})

//video 对象
function videoPlayer() {
  this.video = document.getElementById('video');
  this.init();
}

videoPlayer.prototype = {
  constructor: videoPlayer,
  init: function () {
    this.bindEvent();
  },
  bindEvent: function () {
    var self = this;
    var timer = null;
    var domProress = $('#progressControl');
    //点击播放视频
    domProress.on('click','#palyBtn',function (e) {
      var $_self = $(this);
      if($_self.hasClass('pause-control')) {
        self.video.pause();
      } else {
        self.video.play();
      }
      $_self.toggleClass('pause-control');
    })

    //点击进度条切换播放时间
    domProress.on('touchend','#proLoading', function (e) {

    })
  },
  setProgressWidth: function () {

  }
}

new videoPlayer();
