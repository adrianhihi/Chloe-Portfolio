$(function() {
    $('.nav .about').addClass('active');

    /* ----------------------------------------------------------- */
    /*  Revolution Slider
    /* ----------------------------------------------------------- */

    $('#slider1').revolution({
      sliderType: 'standard',
      sliderLayout: 'auto',
      delay: 9000,
      navigation: {
        arrows: {
          style:"erinyen",
          enable: false,
        }
      },
      gridwidth: 2000,
      gridheight: 812
    });
});
