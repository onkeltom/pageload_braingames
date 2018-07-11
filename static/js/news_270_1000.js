// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '#top', timeout: 270 },
                      { id: '#header', timeout: 270 },
                      { id: '#nav', timeout: 270 },
                      { id: '#main', timeout: 270 },
                      { id: '#sub-nav', timeout: 270 },
                      { id: '#sidebars', timeout: 270 },
                      { id: '#footer', timeout: 270 },
                      { id: '#logo', timeout: 416+416 * randn_bm() },
                      { id: '#video', timeout: 562+562 * randn_bm() },
                      { id: '#hobo', timeout: 708+708 * randn_bm() },
                      { id: '#img_featured', timeout: 708+708 * randn_bm() },
                      { id: '#microphone', timeout: 708+708 * randn_bm() },
                      { id: '#wayne', timeout: 708+708 * randn_bm() },
                      { id: '#casey', timeout: 708+708 * randn_bm() },
                      { id: '#source', timeout: 854+854 * randn_bm() },
                      { id: '.ads_side', timeout: 1000 },
                      { id: '#ad', timeout: 1000 },
                    ];



$('#b1').on('click', function() {
  $('#launch').addClass('display_toggle');

  if (jsPsych.data.getURLVariable('debug') === 'true') {
    $('.debug').css({'display': 'block'});
  }
  Promise.all(configuration.map(promiseGenerator_display)).then(() => {
    setTimeout(function(){
        $('#end-trial').click()
    }, 3000);
  });
});
