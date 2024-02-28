//  function show video one
var boxPopup1 = document.getElementById("popup1");
var boxVideo1 = document.getElementById("video1");
function showVideoOne() {
  boxPopup1.style.display = "block";
  boxVideo1.style.display = "flex";
}
//---- function show video two
var boxPopup2 = document.getElementById("popup2");
var boxVideo2 = document.getElementById("video2");
function showVideoTwo() {
  boxPopup2.style.display = "block";
  boxVideo2.style.display = "flex";
}
//---- function show video three
var boxPopup3 = document.getElementById("popup3");
var boxVideo3 = document.getElementById("video3");
function showVideoThree() {
  boxPopup3.style.display = "block";
  boxVideo3.style.display = "flex";
}
// ------ btn close video one
var btnv1 = document.getElementById("btnV1");
btnv1.addEventListener("click", function () {
  boxPopup1.style.display = "none";
  boxVideo1.style.display = "none";
});
// ------ btn close video two
var btnv2 = document.getElementById("btnV2");
btnv2.addEventListener("click", function () {
  boxPopup2.style.display = "none";
  boxVideo2.style.display = "none";
});
// ------ btn close video three
var btnv3 = document.getElementById("btnV3");
btnv3.addEventListener("click", function () {
  boxPopup3.style.display = "none";
  boxVideo3.style.display = "none";
});
//  function stope video
function stopVideo(element) {
  // getting every iframe from the body
  var iframes = element.querySelectorAll("iframe");
  // reinitializing the values of the src attribute of every iframe to stop the YouTube video.
  for (let i = 0; i < iframes.length; i++) {
    if (iframes[i] !== null) {
      var temp = iframes[i].src;
      iframes[i].src = temp;
    }
  }
}
//  function set style to menu
var btnMenu = document.getElementById("menuCheck");
btnMenu.addEventListener("click", function () {
  if (btnMenu.checked == true) {
    document.getElementById("navUl").style.left = "40%";
    document.getElementById("menuIcon1").style.display = "none";
    document.getElementById("menuIcon2").style.display = "flex";
  } else {
    document.getElementById("navUl").style.left = "100%";
    document.getElementById("menuIcon1").style.display = "flex";
    document.getElementById("menuIcon2").style.display = "none";
  }
});
