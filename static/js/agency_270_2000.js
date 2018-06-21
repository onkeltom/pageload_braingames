// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 270 },
                      { id: '.footer', timeout: 270 },
                      { id: '.spacer', timeout: 270 },
                      { id: '.right_header', timeout: 558 },
                      { id: '.left_title', timeout: 558 },
                      { id: '.right_title', timeout: 558 },
                      { id: '.footer_left', timeout: 558 },
                      { id: '.test', timeout: 846 },
                      { id: '.text1', timeout: 1134 },
                      { id: '.text2', timeout: 1134 },
                      { id: '.text3', timeout: 1134 },
                      { id: '.left_header', timeout: 1134 },
                      { id: '.worklist', timeout: 1134 },
                      { id: '.about', timeout: 1134 },
                      { id: '.img1', timeout: 1422 },
                      { id: '.img2', timeout: 1422 },
                      { id: '.img3', timeout: 1710 },
                      { id: '.img4', timeout: 1710 },
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
