/* zltoast */
function showloading(tips) {
    $("body").append(' <a class="zltoast" style="display: block;position: fixed;width: 130px;word-wrap: break-word;top: 165px;left: 50%;margin-left: -65px;background: rgba(0, 0, 0, .5);text-align: center;border-radius: 5px;color: white;font-size: 15px;line-height: 20px;	padding:  10px 10px 10px 10px;text-align: center;">' + tips + '</a>')
    $(".zltoast").show();
    window.setTimeout(hideloading, 2000);
}
function hideloading() {//隐藏loading
    $(".zltoast").hide();
}

//输出开关
function mililogs(logs) {
/* 上线前，注释下面代码即可去掉输出 */
  console.log(logs);
}
/* 加载等待loading */
function loadingStart() {
    $("body").append('<div class="loadingBg" style=" display: none;position: fixed;width: 100%;height: 100%;background: rgba(255,255,255,0);top: 0;left: 0;z-index: 99;"><img class="loadingicon" style=" width: 130px;height: 90px;position: fixed;left: 50%;top: 50%;margin-left: -65px;margin-top: -45px;display: none;" width="100%" height="100%" src="/images/channel/insure/loading.gif" alt="正在加载" /></div>')
    $(".loadingBg,.loadingicon").show();
}
function loadingEnd() {
    $(".loadingBg,.loadingicon").hide();
}
/* localdata */
function setlocaljson(obj,name) {
    localStorage.name = JSON.stringify(obj);
}
function getlocaljson(name) {
    return JSON.parse(localStorage.name);
}
