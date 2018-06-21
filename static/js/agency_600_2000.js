// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 600 },
                      { id: '.footer', timeout: 600 },
                      { id: '.spacer', timeout: 600 },
                      { id: '.right_header', timeout: 833 },
                      { id: '.left_title', timeout: 833 },
                      { id: '.right_title', timeout: 833 },
                      { id: '.footer_left', timeout: 833 },
                      { id: '.test', timeout: 1066 },
                      { id: '.text1', timeout: 1299 },
                      { id: '.text2', timeout: 1299 },
                      { id: '.text3', timeout: 1299 },
                      { id: '.left_header', timeout: 1299 },
                      { id: '.worklist', timeout: 1299 },
                      { id: '.about', timeout: 1299 },
                      { id: '.img1', timeout: 1532 },
                      { id: '.img2', timeout: 1532 },
                      { id: '.img3', timeout: 1765 },
                      { id: '.img4', timeout: 1765 },
                      { id: '.img5', timeout: 2000 },
                      { id: '.img6', timeout: 2000 },
                    ];




$('#b1').on('click', function() {
  $('#launch').addClass('display_toggle');

  if (jsPsych.data.getURLVariable('debug') === 'true') {
    $('.debug').css({'display': 'block'});
  }
  Promise.all(configuration.map(promiseGenerator)).then(() => {
    setTimeout(function(){
        $('#end-trial').click()
    }, 3000);
  });
});
