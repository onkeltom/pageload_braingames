// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '#top', timeout: 1200 },
                      { id: '#header', timeout: 1200 },
                      { id: '#nav', timeout: 1200 },
                      { id: '#main', timeout: 1200 },
                      { id: '#sub-nav', timeout: 1200 },
                      { id: '#sidebars', timeout: 1200 },
                      { id: '#footer', timeout: 1200 },
                      { id: '#logo', timeout: 2100+2100 * randn_bm() },
                      { id: '#video', timeout: 3000+3000 * randn_bm() },
                      { id: '#hobo', timeout: 3900+3900 * randn_bm() },
                      { id: '#img_featured', timeout: 3900+3900 * randn_bm() },
                      { id: '#microphone', timeout: 3900+3900 * randn_bm() },
                      { id: '#wayne', timeout: 3900+3900 * randn_bm() },
                      { id: '#casey', timeout: 3900+3900 * randn_bm() },
                      { id: '#source', timeout: 4800+4800 * randn_bm() },
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
