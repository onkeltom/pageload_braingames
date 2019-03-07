// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

firstpaint = 1600;
tttext = 2000;
ttimages = 3200;
plt = 4000;

var configuration = [
                      { id: '#top', timeout: firstpaint },
                      { id: '#header', timeout: firstpaint },
                      { id: '#footer', timeout: firstpaint },
                      { id: '#main', timeout: betaRandomInRange(firstpaint, tttext) },
                      { id: '#nav', timeout: betaRandomInRange(firstpaint, tttext) },
                      { id: '#sub-nav', timeout: betaRandomInRange(firstpaint, tttext) },
                      { id: '#sidebars', timeout: betaRandomInRange(firstpaint, tttext) },
                      { id: '#logo', timeout: betaRandomInRange(firstpaint, tttext) },
                      { id: '#video', timeout: betaRandomInRange(tttext, ttimages) },
                      { id: '#hobo', timeout: betaRandomInRange(tttext, ttimages)  },
                      { id: '#img_featured', timeout: betaRandomInRange(tttext, ttimages) },
                      { id: '#microphone', timeout: betaRandomInRange(tttext, ttimages) },
                      { id: '#wayne', timeout: betaRandomInRange(tttext, ttimages)  },
                      { id: '#casey', timeout: betaRandomInRange(tttext, ttimages) },
                      { id: '#source', timeout: betaRandomInRange(tttext, ttimages)  },
                      { id: '.ads_side', timeout: betaRandomInRange(ttimages, plt) },
                      { id: '#ad', timeout: plt },
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
