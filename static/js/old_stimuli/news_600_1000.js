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
                      { id: '#logo', timeout: 680+680 * randn_bm() },
                      { id: '#video', timeout: 760+760 * randn_bm() },
                      { id: '#hobo', timeout: 840+840 * randn_bm() },
                      { id: '#img_featured', timeout: 840+840 * randn_bm() },
                      { id: '#microphone', timeout: 840+840 * randn_bm() },
                      { id: '#wayne', timeout: 840+840 * randn_bm() },
                      { id: '#casey', timeout: 840+840 * randn_bm() },
                      { id: '#source', timeout: 920+920 * randn_bm() },
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
