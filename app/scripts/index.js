jQuery(function($) {

    /* ----------------------------------------------------------- */
    /*  Revolution Slider
    /* ----------------------------------------------------------- */

    jQuery('#slider1').revolution({
      sliderType: 'standard',
      sliderLayout: 'auto',
      delay: 9000,
      navigation: {
        arrows: {
          style:"erinyen",
          enable: true,
        }
      },
      gridwidth: 2000,
      gridheight: 812
    });

    /* ----------------------------------------------------------- */
    /*  5. LATEST COURSE SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    jQuery('#mu-latest-course-slide').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: 'unslick'
        // instead of a settings object
      ]
    });

    /* ----------------------------------------------------------- */
    /*  TESTIMONIAL
    /* ----------------------------------------------------------- */

    jQuery('#mu-testimonial-slide').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      cssEase: 'linear'
    });


    /* ----------------------------------------------------------- */
    /*  VIDEO
    /* ----------------------------------------------------------- */
    $('#intro-video').click(function () {
      var src = 'https://www.youtube.com/embed/rV2Id1lywFI?rel=0&autoplay=1';
      $('#video-modal').modal('show');
      $('#video-modal iframe').attr('src', src);
    });
    $('#video-modal').on('hidden.bs.modal', function () {
      $('#video-modal iframe').removeAttr('src');
    });
});
