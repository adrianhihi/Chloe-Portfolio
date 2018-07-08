// /* ----------------------------------------------------------- */
// /*  WOW Animation
// /* ----------------------------------------------------------- */ 
// jQuery(function($) {
//   wow = new WOW({
//     animateClass: 'animated',
//     offset:       100,
//     live:         true,
//     callback:     function(box) {
//       console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//     }
//   });
//   wow.init();
// });
$(document).ready(function() {

  // password page logic
  // Variables
  var passPage = $("#pass_index");
  var mainPage = $(".forPassPage");
  var passbtn = $("#passwordSubmit");
  var passInput = $("#userPassword");
  var password = "HelloDesigner";

  //initial
  var isPassEntered = false;
  isPassEntered = getStoredValue('passFlag');


  if (isPassEntered) {
    passPage.css("display", "none");
    mainPage.css("display", "block");
  }
  //get value of password
  passbtn.click(function() {
    var enteredPass = passInput.val();
    if (enteredPass !== password) {
      storeValue('passFlag', false);
      $(".errorMsg").css("display", "block");
      $("#userPassword").addClass("error");
    } else {
      storeValue('passFlag', true);
      passPage.css("display", "none");
      mainPage.css("display", "block");
      $(".errorMsg").css("display", "none");
      $("#userPassword").removeClass("error");
    }
  });

  function storeValue(key, value) {
      if (localStorage) {
          localStorage.setItem(key, value);
      } else {
          $.cookies.set(key, value);
      }
  }

  function getStoredValue(key) {
      if (localStorage) {
          return localStorage.getItem(key);
      } else {
          return $.cookies.get(key);
      }
  }


  var btn = $("#menu-btn");
  var bg = $("#about-background");
  var close = $("#menu-close-btn");
  btn.click( function() {
    bg.css("display", "block");
    btn.css("display", "none");
    $("body").css("overflow-y", "hidden");
  } );
  close.click(function() {
    bg.css("display", "none");
    btn.css("display", "block");
    $("body").css("overflow-y", "");
  });
  var orgTop = $(".main-content-19 .right div").css("top");
  $(".main-content-19 .left").mouseleave(function(){
    $(".main-content-19 .right div").css("top", orgTop);
  });
  $(".main-content-19 .list-1").mouseenter(function(){
    $(".main-content-19 .right div").css("top", 0+"px");
  });
  $(".main-content-19 .list-2").mouseenter(function(){
    $(".main-content-19 .right div").css("top", (-592 * 1)+"px");
  });
  $(".main-content-19 .list-3").mouseenter(function(){
    $(".main-content-19 .right div").css("top", (-592 * 2)+"px");
  });
  $(".main-content-19 .list-4").mouseenter(function(){
    $(".main-content-19 .right div").css("top", (-592 * 3) +"px");
  });
  $(".main-content-19 .list-5").mouseenter(function(){
    $(".main-content-19 .right div").css("top", (-592 * 4)+"px");
  });
  $(".main-content-19 .list-6").mouseenter(function(){
    $(".main-content-19 .right div").css("top", (-592 * 5) +"px");
  });
  $(".main-content-19 .list-7").mouseenter(function(){
    $(".main-content-19 .right div").css("top", (-592 * 6) +"px");
  });

  $(".content-cell").click(function() {
    $(".forPassPage").css('z-index', '1');
    $("#imageBlock").css('display', 'block');
    $('body').css('overflow-y', 'hidden');
    for (var i = 1; i <= 14; i ++) {
      if ($(this).hasClass("content-cell-" + i)) {
        $("#imageBlock .image").css('background-image', 'url(./assets/img/designAtZscaler/largeImages/' + i + 'l.jpg)');
        clearImageClass();
        $("#imageBlock #imageLeftBtn").addClass("image-" + i);
        $("#imageBlock #imageRightBtn").addClass("image-" + i);
      }
    }
  });
  $('#imageRightBtn').click(function() {
      for (var i = 1; i <= 14; i ++) {
        j = i % 14 + 1;
        if ($(this).hasClass("image-" + i)) {
          $("#imageBlock .image").css('background-image', 'url(./assets/img/designAtZscaler/largeImages/' + j + 'l.jpg)');
          clearImageClass();
          $("#imageBlock #imageLeftBtn").addClass("image-" + j);
          $("#imageBlock #imageRightBtn").addClass("image-" + j);
          break;
        }
      }
  });
  $('#imageLeftBtn').click(function() {
      for (var i = 14; i > 1 ; i --) {
        j = i - 1;

        if ($(this).hasClass("image-" + i)) {
          $("#imageBlock .image").css('background-image', 'url(./assets/img/designAtZscaler/largeImages/' + j + 'l.jpg)');
          clearImageClass();
          $("#imageBlock #imageLeftBtn").addClass("image-" + j);
          $("#imageBlock #imageRightBtn").addClass("image-" + j);
          break;
        }
      }
  });
  $('.close-imageblock').click(function() {
    $("#imageBlock").css('display', 'none');
    $('body').css('overflow-y', 'auto');
  });
  function clearImageClass() {
    for (var i = 1; i <= 14; i ++) {
      $("#imageBlock #imageLeftBtn").removeClass("image-" + i);
      $("#imageBlock #imageRightBtn").removeClass("image-" + i);
    }
  }



});