//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '(つェ⊂)我藏好了哦~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '(*´∇｀*) 被你发现啦~';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});