// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

firstpaint = 600;
tttext = 1200;
ttimages = 3000;
plt = 4000;

var configuration = [
                      { id: '#top', timeout: firstpaint },
                      { id: '#header', timeout: firstpaint },
                      { id: '#footer', timeout: firstpaint },
                      { id: '#main', timeout: tttext - tttext * normalRandomInRange(0, jitter) },
                      { id: '#nav', timeout: tttext - tttext * normalRandomInRange(0, jitter) },
                      { id: '#sub-nav', timeout: tttext - tttext * normalRandomInRange(0, jitter) },
                      { id: '#sidebars', timeout: tttext - tttext * normalRandomInRange(0, jitter) },
                      { id: '#logo', timeout: tttext - tttext * normalRandomInRange(0, jitter) },
                      { id: '#video', timeout: ttimages - ttimages * normalRandomInRange(0, jitter) },
                      { id: '#hobo', timeout: ttimages - ttimages * normalRandomInRange(0, jitter)  },
                      { id: '#img_featured', timeout: ttimages - ttimages * normalRandomInRange(0, jitter) },
                      { id: '#microphone', timeout: ttimages - ttimages * normalRandomInRange(0, jitter) },
                      { id: '#wayne', timeout: ttimages - ttimages * normalRandomInRange(0, jitter)  },
                      { id: '#casey', timeout: ttimages - ttimages * normalRandomInRange(0, jitter) },
                      { id: '#source', timeout: ttimages - ttimages * normalRandomInRange(0, jitter)  },
                      { id: '.ads_side', timeout: plt - plt * normalRandomInRange(0, jitter) },
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
