// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

firstpaint = 1000;
tttext = 2000;
ttimages = 3000;
plt = 4000;

var configuration = [
                      { id: '.head', timeout: firstpaint },
                      { id: '.footer', timeout: firstpaint },
                      { id: '.spacer', timeout: firstpaint },
                      { id: '.right_header', timeout: tttext - tttext * randn_bm() },
                      { id: '.left_header', timeout: tttext - tttext * randn_bm()  },
                      { id: '.left_title', timeout: tttext - tttext * randn_bm()  },
                      { id: '.right_title', timeout: tttext - tttext * randn_bm()  },
                      { id: '.footer_left', timeout: tttext - tttext * randn_bm()  },
                      { id: '.test', timeout: tttext - tttext * randn_bm() },
                      { id: '.worklist', timeout: tttext - tttext * randn_bm()  },
                      { id: '.about', timeout: tttext - tttext * randn_bm()  },
                      { id: '.text1', timeout: ttimages - ttimages * randn_bm() },
                      { id: '.text2', timeout: ttimages - ttimages * randn_bm() },
                      { id: '.text3', timeout: ttimages - ttimages * randn_bm() },
                      { id: '.img1', timeout: plt - plt * randn_bm() },
                      { id: '.img2', timeout: plt - plt * randn_bm() },
                      { id: '.img3', timeout: plt - plt * randn_bm() },
                      { id: '.img4', timeout: plt - plt * randn_bm() },
                      { id: '.img5', timeout: plt },
                      { id: '.img6', timeout: plt },
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
