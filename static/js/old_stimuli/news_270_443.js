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
                      { id: '#logo', timeout: 304+304 * randn_bm() },
                      { id: '#video', timeout: 338+338 * randn_bm() },
                      { id: '#hobo', timeout: 372+372 * randn_bm() },
                      { id: '#img_featured', timeout: 372+372 * randn_bm() },
                      { id: '#microphone', timeout: 372+372 * randn_bm() },
                      { id: '#wayne', timeout: 372+372 * randn_bm() },
                      { id: '#casey', timeout: 372+372 * randn_bm() },
                      { id: '#source', timeout: 406+406 * randn_bm() },
                      { id: '.ads_side', timeout: 443 },
                      { id: '#ad', timeout: 443 },
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
