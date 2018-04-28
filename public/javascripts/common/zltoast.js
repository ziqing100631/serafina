function showloading(tips) {
    $("body").append(' <a class="zltoast" style="display: block;position: fixed;width: 130px;word-wrap: break-word;top: 165px;left: 50%;margin-left: -65px;background: rgba(0, 0, 0, .5);text-align: center;border-radius: 5px;color: white;font-size: 15px;line-height: 20px;	padding:  10px 10px 10px 10px;text-align: center;">' + tips + '</a>')
    
    $(".zltoast").css("display", "block",);


    window.setTimeout(hideloading, 2000);
}
function hideloading() {//隐藏loading
    $(".zltoast").remove();
}