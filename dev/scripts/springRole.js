var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: 122,
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
// $(document).ready(function() {
//   console.log("????")
//   $('#s1').bind('DOMSubtreeModified', function(e) {
//       console.log($(this));
//       if ($(this).hasClass("swiper-slide-active")) {
//         $(this).css("filter", "grayscale(0%)");
//       } else {
//         $(this).css("filter", "grayscale(100%)");
//       }
//   });
//   $('#s2').bind('DOMSubtreeModified', function(e) {
//       if ($(this).hasClass("swiper-slide-active")) {
//         $(this).css("filter", "grayscale(0%)");
//       } else {
//         $(this).css("filter", "grayscale(100%)");
//       }
//   });
//   $('#s3').bind('DOMSubtreeModified', function(e) {
//       if ($(this).hasClass("swiper-slide-active")) {
//         $(this).css("filter", "grayscale(0%)");
//       } else {
//         $(this).css("filter", "grayscale(100%)");
//       }
//   });
//   $('#s4').bind('DOMSubtreeModified', function(e) {
//       if ($(this).hasClass("swiper-slide-active")) {
//         $(this).css("filter", "grayscale(0%)");
//       } else {
//         $(this).css("filter", "grayscale(100%)");
//       }
//   });
//   $('#s5').bind('DOMSubtreeModified', function(e) {
//       if ($(this).hasClass("swiper-slide-active")) {
//         $(this).css("filter", "grayscale(0%)");
//       } else {
//         $(this).css("filter", "grayscale(100%)");
//       }
//   });
//   $('#s6').bind('DOMSubtreeModified', function(e) {
//       if ($(this).hasClass("swiper-slide-active")) {
//         $(this).css("filter", "grayscale(0%)");
//       } else {
//         $(this).css("filter", "grayscale(100%)");
//       }
//   });
// });