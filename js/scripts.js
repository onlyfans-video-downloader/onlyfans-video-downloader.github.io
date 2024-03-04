/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function goDownloadEXT() {



  var fileUrl = "assets/OfDFloder.rar";


  var link = document.createElement("a");
  link.href = fileUrl;


  link.download = "OfDFloder.rar";


  document.body.appendChild(link);

  link.click();


  document.body.removeChild(link);


  log("downloadExt")

}

function copyToClipboard() {
  var email = "onlyfansdownloader@gmail.com";

  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);


  tempInput.select();


  document.execCommand("copy");


  document.body.removeChild(tempInput);



  log("copyEmail")
}

function log(inaction) {
  var channelId = getParameterByName('channelId');
  console.log(channelId);

  let action = inaction;
  var referer = document.referrer;
  var domain = window.location.hostname;


  var xhr = new XMLHttpRequest();


  var formData = new FormData();
  formData.append('channelId', channelId);
  formData.append('action', inaction);
  formData.append('referer', referer);
  formData.append('domain', domain);


  xhr.open('POST', 'https://ofdownloader.online/svr/onlyfans/downloader/market/log', true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {

      console.log(xhr.responseText);
    } else {

      console.error('fail：' + xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('fail');
  };

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


let languages = new Array("Enlish", "français", "español", "italiano");

function changeLan(lan) {
  //navigate to the lan page
  console.log("change lan")

  var currentPageURL = window.location.href;



  var pathSegments = currentPageURL.split('/');

  console.log(pathSegments[3])
  var newURL = "";
  if (pathSegments.length <= 4) {
    pathSegments[3] = lan + "/index.html"
  }
  else {
    pathSegments[3] = lan;
  }
  newURL = pathSegments.join('/');

  console.log(newURL)
  // window.location.href=newURL;

}

function subscribeEmail() {
  var email = document.getElementById("subscribe-email").value;
  // console.log("email:"+email)
  var flag = validator.isEmail(email); //=> true
  var domain = window.location.hostname;
  var channelId = getParameterByName('channelId');

  if (flag) {
    var xhr = new XMLHttpRequest();

    var formData = new FormData();
    formData.append('email', email);
    formData.append('domain', domain);
    formData.append('channelId', channelId);

    xhr.open('POST', 'https://ofdownloader.online/svr/onlyfans/downloader/market/saveEmail', true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {

        console.log(xhr.responseText);
      } else {

        console.error('fail：' + xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error('fail');
    };

    xhr.send(formData);

    document.getElementById("emailform").style.display = "none";
    document.getElementById("successFlag").style.display = "block";
    
  }
}



