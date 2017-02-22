$(function() {
  $('.nav .curriculum').addClass('active');

  $('#showCoursesBtn').click(function() {
    if ($(this).hasClass('degrees-show-stats-show')) {
      $(this).removeClass('degrees-show-stats-show');
      $('.courses-container').hide();
    } else {
      $(this).addClass('degrees-show-stats-show');
      $('.courses-container').show();
    }
  });
});