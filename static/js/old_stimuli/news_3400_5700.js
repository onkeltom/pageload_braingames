// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '#top', timeout: 3400 },
                      { id: '#header', timeout: 3400 },
                      { id: '#nav', timeout: 3400 },
                      { id: '#main', timeout: 3400 },
                      { id: '#sub-nav', timeout: 3400 },
                      { id: '#sidebars', timeout: 3400 },
                      { id: '#footer', timeout: 3400 },
                      { id: '#logo', timeout: 3860+3860 * randn_bm() },
                      { id: '#video', timeout: 4320+4320 * randn_bm() },
                      { id: '#hobo', timeout: 4780+4780 * randn_bm() },
                      { id: '#img_featured', timeout: 4780+4780 * randn_bm() },
                      { id: '#microphone', timeout: 4780+4780 * randn_bm() },
                      { id: '#wayne', timeout: 4780+4780 * randn_bm() },
                      { id: '#casey', timeout: 4780+4780 * randn_bm() },
                      { id: '#source', timeout: 5240+5240 * randn_bm() },
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
