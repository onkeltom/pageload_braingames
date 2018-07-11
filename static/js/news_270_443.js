// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      // First paint
                      { id: '#top', timeout: 270 },
                      { id: '#header', timeout: 270 },
                      { id: '#nav', timeout: 270 },
                      { id: '#main', timeout: 270 },
                      { id: '#sub-nav', timeout: 298 + 298 * randn_bm() },
                      { id: '#sidebars', timeout: 298 + 298 * randn_bm() },
                      { id: '#footer', timeout: 298 + 298 * randn_bm() },
                      { id: '#main', timeout: 270 },
                      // newspage logo
                      { id: '#logo', timeout: 326 + 326 * randn_bm() },
                      // video
                      { id: '#video', timeout: 382 + 382 * randn_bm() },
                      // logos
                      // { id: '#rss_logo', timeout: 410 + 410 * randn_bm() },
                      // { id: '#twitter_logo', timeout: 410 + 410 * randn_bm() },
                      // all images
                      { id: '#hobo', timeout: 443 + 443 * randn_bm() },
                      { id: '#img_featured', timeout: 443 + 443 * randn_bm() },
                      { id: '#microphone', timeout: 443 + 443 * randn_bm() },
                      { id: '#wayne', timeout: 443 + 443 * randn_bm() },
                      { id: '#casey', timeout: 443 + 443 * randn_bm() },
                      //video load fake
                      // tbd
                      // ads
                      { id: '.ads_side', timeout: 550 + 550 * randn_bm() },
                      { id: '#ad', timeout: 550 + 550 * randn_bm() },
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
