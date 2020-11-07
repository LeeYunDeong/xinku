/**
 * 
 * @param {ajax的请求方式（1，get请求请自行拼接    2，post请求请自行转换为json）} method 
 * @param {请求地址} url 
 * @param {处理回调函数} call
 * @param {发送请求参数} param
 */
function ajax(method, url, call, param) {
    var ajaxObj = null;
    try {
        //构建XML对象
        ajaxObj = new XMLHttpRequest();
    } catch (e) {
        //针对IE低版本
        ajaxObj = new ActiveXObject('Msxml2.XMLHTTP');
    }

    //初始化ajax部分属性
    ajaxObj.DONE = 4;

    //构建请求地址
    ajaxObj.open(method, url);

    //设置回调
    ajaxObj.onreadystatechange = function () {
        //请求是否完成
        if (ajaxObj.readyState == ajaxObj.DONE && ajaxObj.status == 200) {
            call(ajaxObj.responseText);
        }
    }

    //发送请求
    if (method.toUpperCase().trim() == 'GET') {
        ajaxObj.send(null);
    } else {
        ajaxObj.send(param);
    }
}