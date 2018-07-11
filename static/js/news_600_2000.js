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
                      { id: '#logo', timeout: 880+880 * randn_bm() },
                      { id: '#video', timeout: 1160+1160 * randn_bm() },
                      { id: '#hobo', timeout: 1440+1440 * randn_bm() },
                      { id: '#img_featured', timeout: 1440+1440 * randn_bm() },
                      { id: '#microphone', timeout: 1440+1440 * randn_bm() },
                      { id: '#wayne', timeout: 1440+1440 * randn_bm() },
                      { id: '#casey', timeout: 1440+1440 * randn_bm() },
                      { id: '#source', timeout: 1720+1720 * randn_bm() },
                      { id: '.ads_side', timeout: 2000 },
                      { id: '#ad', timeout: 2000 },
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
