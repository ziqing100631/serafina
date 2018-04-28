document.write("<script language=javascript src='zepto.js'></script>");


function Mrequest(type, url, postData, dataType, succCallback, errorCallback) {
    var type = type || "post";
    var dataType = dataType || "json";

    $.ajax({
        type: type,
        url: url,
        data: postData,
        dataType: dataType,

        success: function (res) {
            if (res.code == 10318888) {
                succCallback(res);

            } else {
                showloading(res.message);
            }
        },
        error: function (err, xhr) {
            showloading("网络异常请重试");

        }
    });
}

，，，