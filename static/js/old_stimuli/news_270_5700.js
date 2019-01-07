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
                      { id: '#logo', timeout: 1356+1356 * randn_bm() },
                      { id: '#video', timeout: 2442+2442 * randn_bm() },
                      { id: '#hobo', timeout: 3528+3528 * randn_bm() },
                      { id: '#img_featured', timeout: 3528+3528 * randn_bm() },
                      { id: '#microphone', timeout: 3528+3528 * randn_bm() },
                      { id: '#wayne', timeout: 3528+3528 * randn_bm() },
                      { id: '#casey', timeout: 3528+3528 * randn_bm() },
                      { id: '#source', timeout: 4614+4614 * randn_bm() },
                      { id: '.ads_side', timeout: 5700 },
                      { id: '#ad', timeout: 5700 },
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
