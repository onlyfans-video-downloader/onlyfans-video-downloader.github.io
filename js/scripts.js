/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function goDownloadEXT() {
  // alert("1")
  // window.open("http://127.0.0.1:5500/web/OfDFloder.rar")

  // 构造文件的URL
  var fileUrl = "assets/OfDFloder.rar";

  // 创建一个虚拟的<a>元素
  var link = document.createElement("a");
  link.href = fileUrl;

  // 设置下载文件的属性
  link.download = "OfDFloder.rar";

  // 将虚拟<a>元素添加到DOM中
  document.body.appendChild(link);

  // 模拟点击<a>元素，开始下载文件
  link.click();

  // 下载完成后移除<a>元素
  document.body.removeChild(link);
  //  alert(2)

  log("downloadExt")

}

function copyToClipboard() {
  var email = "onlyfansdownloader@gmail.com";
  // 创建一个包含固定值的临时元素
  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);

  // 选中临时元素中的文本
  tempInput.select();

  // 复制选中的文本到剪贴板
  document.execCommand("copy");

  // 移除临时元素
  document.body.removeChild(tempInput);

  // 提示用户已成功复制
  // alert("Email address has been copied to your clipboard");

  log("copyEmail")
}

function log(inaction) {
  var channelId = getParameterByName('channelId');
  console.log(channelId);

  let action = inaction;


  // 创建XMLHttpRequest对象
  var xhr = new XMLHttpRequest();

  // 准备FormData对象，用于包装请求数据
  var formData = new FormData();
  formData.append('channelId', channelId);
  formData.append('action', inaction);

  // 配置请求
  xhr.open('POST', 'https://ofdownloader.online/svr/onlyfans/downloader/market/log', true); // 使用POST方法请求某个URL

  // 设置请求完成后的回调函数
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // 请求成功，处理返回的数据
      console.log(xhr.responseText);
    } else {
      // 请求失败
      console.error('请求失败：' + xhr.status);
    }
  };

  // 设置请求错误时的回调函数
  xhr.onerror = function () {
    console.error('请求出错');
  };

  // 发送请求，传入FormData对象
  xhr.send(formData);

}

log("viewPage")

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}






