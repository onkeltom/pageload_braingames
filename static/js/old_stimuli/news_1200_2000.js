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
                      { id: '#logo', timeout: 1360+1360 * randn_bm() },
                      { id: '#video', timeout: 1520+1520 * randn_bm() },
                      { id: '#hobo', timeout: 1680+1680 * randn_bm() },
                      { id: '#img_featured', timeout: 1680+1680 * randn_bm() },
                      { id: '#microphone', timeout: 1680+1680 * randn_bm() },
                      { id: '#wayne', timeout: 1680+1680 * randn_bm() },
                      { id: '#casey', timeout: 1680+1680 * randn_bm() },
                      { id: '#source', timeout: 1840+1840 * randn_bm() },
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
