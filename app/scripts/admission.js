$(function() {
  $('.nav .admission').addClass('active');

  var maskWidth = $('.courseImg').width();
  $('.mask').css({
    'width': maskWidth + 'px',
    'height': maskWidth + 'px'
  });
});