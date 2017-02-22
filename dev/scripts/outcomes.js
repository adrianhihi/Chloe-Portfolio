jQuery(function($) {
  $('.nav .outcomes').addClass('active');
  $('#video-modal').on('hidden.bs.modal', function () {
    $('#video-modal iframe').removeAttr('src');
  });
  $('.story-frame').click(function (e) {
    var type = $(this).data('story-type');
    var link = $(this).data('link');
    switch ($(this).data('story-type')) {
    case 'outlink':
      window.open(link);
      break;
    case 'video':
      var src = link + '?rel=0&autoplay=1';
      $('#video-modal').modal('show');
      $('#video-modal iframe').attr('src', src);
      break;
    }
  });

  var pageData = {};

  $.ajax({
    dataType: 'json',
    url: './data/outcomes.json',
    success: function (data) {
        pageData = data;

        $('#link-semester-16-jun-sep').click();
    }
  });

  // Company chart
  var companyChart = Highcharts.chart('company-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Companies'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Companies',
        colorByPoint: true,
        data: []
    }]
  });

  // Major chart
  var majorChart = Highcharts.chart('major-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Majors'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Majors',
        colorByPoint: true,
        data: []
    }]
  });

  // Semester links
  $('.link-semester').click(function (event) {
    event.preventDefault();
    var semester = $(this).data('semester');
    $('.tab-pane').removeClass('active');
    $('#offers-' + semester).addClass('active');

    // Company data
    var companyMapping = {};
    var majorMapping = {};
    var students = pageData.offers[semester];
    students.forEach(function (student) {
      student.offer.forEach(function (company) {
        if (companyMapping.hasOwnProperty(company)) {
          companyMapping[company]++;
        } else {
          companyMapping[company] = 1;
        }
      });

      var major = student.major;
      if (majorMapping.hasOwnProperty(major)) {
        majorMapping[major]++;
      } else {
        majorMapping[major] = 1;
      }
    });

    companyData = [];
    for (var company in companyMapping) {
      if (!companyMapping.hasOwnProperty(company)) continue;

      companyData.push({
        name: company,
        y: companyMapping[company]
      });
    }

    companyChart.series[0].setData(companyData);

    // Major data
    var majorData = [];
    for (var major in majorMapping) {
      if (!majorMapping.hasOwnProperty(major)) continue;

      majorData.push({
        name: major,
        y: majorMapping[major]
      });
    }

    majorChart.series[0].setData(majorData);
  });
})
