(function () {
      var lists = ['Chloe.', 'Designer.', 'Dreamer.', 'Planner.'];
      var c = $('#landingText');
      var i = 0;

      setInterval(function () {
        c.fadeOut(1000, function() {
          i = (i + 1) % lists.length
          c.text(lists[i])
          c.fadeIn(1000)
        })
      }, 3000)
})()