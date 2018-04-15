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
});