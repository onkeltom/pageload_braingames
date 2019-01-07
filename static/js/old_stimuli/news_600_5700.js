// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '#top', timeout: 600 },
                      { id: '#header', timeout: 600 },
                      { id: '#nav', timeout: 600 },
                      { id: '#main', timeout: 600 },
                      { id: '#sub-nav', timeout: 600 },
                      { id: '#sidebars', timeout: 600 },
                      { id: '#footer', timeout: 600 },
                      { id: '#logo', timeout: 1620+1620 * randn_bm() },
                      { id: '#video', timeout: 2640+2640 * randn_bm() },
                      { id: '#hobo', timeout: 3660+3660 * randn_bm() },
                      { id: '#img_featured', timeout: 3660+3660 * randn_bm() },
                      { id: '#microphone', timeout: 3660+3660 * randn_bm() },
                      { id: '#wayne', timeout: 3660+3660 * randn_bm() },
                      { id: '#casey', timeout: 3660+3660 * randn_bm() },
                      { id: '#source', timeout: 4680+4680 * randn_bm() },
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
