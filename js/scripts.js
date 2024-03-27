/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/

let baseurl = "https://ofdownloader.online/svr/"

// This file is intentionally blank
// Use this file to add JavaScript to your project
function goDownloadEXT(osversion) {



  var fileUrl = "assets/OnlyfansVideoDownloader-"+osversion+".zip";
  console.log("fileUrl:" + fileUrl)

  var link = document.createElement("a");
  link.href = fileUrl;


  link.download = "OnlyfansVideoDownloader-"+osversion+".zip";


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
  var clientId = getParameterByName('clientId');
  var version = getParameterByName('version');
  var referer = document.referrer;
  // var domain = window.location.href;

  const data = Device.Info({
    info: ['deviceType', 'OS', 'OSVersion', 'platform', 'screenHeight', 'screenWidth', 'language',
      'netWork', 'orientation', 'browserInfo', 'fingerprint', 'userAgent', 'appCodeName', 'appName',
      'appVersion', 'geoPosition', 'date', 'UUID']
  });

  var xhr = new XMLHttpRequest();

  var domain = window.location.href;
  var formData = new FormData();
  formData.append('domain', domain);
  formData.append('channelId', channelId);
  formData.append('version', version);
  formData.append('referer', referer);
  formData.append('deviceType', data.deviceType);
  formData.append('OS', data.OS);
  formData.append('OSVersion', data.OSVersion);
  formData.append('platform', data.platform);
  formData.append('screenHeight', data.screenHeight);
  formData.append('screenWidth', data.screenWidth);
  formData.append('language', data.language);
  formData.append('netWork', data.netWork);
  formData.append('orientation', data.orientation);
  formData.append('browserInfo', data.browserInfo);
  formData.append('fingerprint', data.fingerprint);
  formData.append('userAgent', data.userAgent);
  formData.append('appCodeName', data.appCodeName);
  formData.append('appName', data.appName);
  formData.append('appVersion', data.appVersion);
  formData.append('geoPosition', data.geoPosition);
  formData.append('date', data.date);
  formData.append('UUID', data.UUID);
  formData.append('action', inaction);
  formData.append('clientId', clientId);

  xhr.open('POST', baseurl + 'onlyfans/downloader/market/log', true);


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

// log("viewPage")

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
  var domain = window.location.href;
  var channelId = getParameterByName('channelId');

  if (flag) {
    var xhr = new XMLHttpRequest();

    var formData = new FormData();
    formData.append('email', email);
    formData.append('domain', domain);
    formData.append('channelId', channelId);

    // xhr.open('POST', 'https://ofdownloader.online/svr/onlyfans/downloader/market/saveEmail', true);
    xhr.open('POST', baseurl + 'onlyfans/downloader/market/saveEmail', true);

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


function showStep(element) {
  element.style.display = 'none';
  // console.log(document.getElementsByClassName("guideimgdiv"))
  var eles = document.getElementsByClassName("guideimgdiv");
  for (var i = 0; i < eles.length; i++) {
    eles[i].style.display = "block";
  }


  var details = document.getElementsByClassName("detaildiv");
  for (var i = 0; i < details.length; i++) {
    details[i].style.display = "none";
  }

}


