(function () {
      var lists = ['Chloe.', 'a Designer.', 'a Dreamer.', 'a Planner.'];
      var c = $('#landingText');
      var i = 0;

      setInterval(function () {
        c.fadeOut(600, function() {
          i = (i + 1) % lists.length
          c.text(lists[i])
          c.fadeIn(600)
        })
      }, 2000)
})()