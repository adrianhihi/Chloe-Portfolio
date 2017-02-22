/* ----------------------------------------------------------- */
/*  WOW Animation
/* ----------------------------------------------------------- */ 
jQuery(function($) {
  wow = new WOW({
    animateClass: 'animated',
    offset:       100,
    live:         true,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  });
  wow.init();
});
