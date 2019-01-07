// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

firstpaint = 1200;
tttext = 1500;
ttimages = 2400;
plt = 3000;

var configuration = [
                      { id: '#top', timeout: firstpaint },
                      { id: '#header', timeout: firstpaint },
                      { id: '#footer', timeout: firstpaint },
                      { id: '#main', timeout: tttext - tttext * randn_bm() },
                      { id: '#nav', timeout: tttext - tttext * randn_bm() },
                      { id: '#sub-nav', timeout: tttext - tttext * randn_bm() },
                      { id: '#sidebars', timeout: tttext - tttext * randn_bm() },
                      { id: '#logo', timeout: tttext - tttext * randn_bm() },
                      { id: '#video', timeout: ttimages - ttimages * randn_bm() },
                      { id: '#hobo', timeout: ttimages - ttimages * randn_bm()  },
                      { id: '#img_featured', timeout: ttimages - ttimages * randn_bm() },
                      { id: '#microphone', timeout: ttimages - ttimages * randn_bm() },
                      { id: '#wayne', timeout: ttimages - ttimages * randn_bm()  },
                      { id: '#casey', timeout: ttimages - ttimages * randn_bm() },
                      { id: '#source', timeout: ttimages - ttimages * randn_bm()  },
                      { id: '.ads_side', timeout: plt - plt * randn_bm() },
                      { id: '#ad', timeout: plt - plt * randn_bm() },
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
