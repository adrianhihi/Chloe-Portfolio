$(document).ready(function() {
  var picture_1 = $("#pic-1");
  var pointer = $("#pic-p");
  $("#ee_pointer").mousemove(getMousePosition);
  function getMousePosition(event) {
    var mouseX = event.pageX;
    var originLeft = document.getElementById("ee_pointer").getBoundingClientRect().left;
    var originRight = document.getElementById("ee_pointer").getBoundingClientRect().right;
    var percentage = ( mouseX - originLeft ) / ( originRight - originLeft ) * 100;
    if (percentage < 101 && percentage > -1) {
      picture_1.css('width', percentage + '%');
      pointer.css('left', percentage + '%');      
    }
  }
});