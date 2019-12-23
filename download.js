    // 判断设备
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var isWeixin = u.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
    var isQQ = u.toLowerCase().match(/qq\//i) == "qq/";
    var timer = null;

    // 标签变量 
    var WeixinDiv = document.getElementById('isWx');
    var btn_iphone = document.getElementById('link_iphone');
    var btn_android = document.getElementById('link_android');
    var icon = document.getElementById('icon')
    // 倒计时
    var TimeDiv = document.getElementById('times');
    // 教程
    var TechBtn = document.getElementById('iphoneTechBtn');
    var TechDiv = document.getElementById('iphoneTech');
    // 正在下载提示语
    var Tips = document.getElementById('tips')
    var TipsText = document.getElementById('tips-text')
    start()
    // 下载ios
    function downIos() {
      console.log('ios')
      window.clearInterval(timer)
      TimeDiv.innerHTML = ''
      window.location.href = window.link_iphone
      Tips.style.display = 'block'
      TipsText.innerHTML = '请在手机桌面查看安装进度...'
    }
    // 下载android
    function downAndroid() {
      console.log('an')
      window.clearInterval(timer)
      TimeDiv.innerHTML = ''
      window.location.href = window.link_android
      Tips.style.display = 'block'
      TipsText.innerHTML = '正在下载...'
    }
    // 操作逻辑
    function start() {
      if (window.link_icon) {
        icon.setAttribute("src", window.link_icon)
      }
      // 先判断是否是微信或qq，显示在浏览器中打开的提示
      if (isWeixin || isQQ) {
        WeixinDiv.style.display = 'block';
      } else {
        WeixinDiv.style.display = 'none';
      }
      // 设置下载步骤和下载链接配置
      if (isiOS) {
        TechBtn.style.display = 'block'
        timeToDownload(window.link_iphone, window.sec)
      } else {
        TechBtn.style.display = 'none'
        timeToDownload(window.link_android, window.sec)
      }
    }

    // 倒计时开始下载
    function timeToDownload(url, sec) {
      timer = window.setInterval(function () {
        if (sec <= 0) {
          window.clearInterval(timer)
          TimeDiv.innerHTML = ''
          window.location.href = url
          Tips.style.display = 'block'
          if (isiOS) {
            TipsText.innerHTML = '请在手机桌面查看安装进度...'
          } else {
            TipsText.innerHTML = '正在下载...'
          }
        } else {
          TimeDiv.innerHTML = sec + '秒后开始下载...'
          sec--
        }
      }, 999)
    }
    // 展开教程
    function showTech() {
      TechBtn.style.display = 'none'
      TechDiv.className = "tech-div show"
    }
    // 关闭教程
    function hiddenTech() {
      TechBtn.style.display = 'block'
      TechDiv.className = "tech-div"
    }
