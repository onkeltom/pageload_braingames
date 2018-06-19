// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 3400 },
                      { id: '.footer', timeout: 3400 },
                      { id: '.spacer', timeout: 3400 },
                      { id: '.right_header', timeout: 3783 },
                      { id: '.left_title', timeout: 3783 },
                      { id: '.right_title', timeout: 3783 },
                      { id: '.footer_left', timeout: 3783 },
                      { id: '.test', timeout: 4166 },
                      { id: '.text1', timeout: 4549 },
                      { id: '.text2', timeout: 4549 },
                      { id: '.text3', timeout: 4549 },
                      { id: '.left_header', timeout: 4549 },
                      { id: '.worklist', timeout: 4549 },
                      { id: '.about', timeout: 4549 },
                      { id: '.img1', timeout: 4932 },
                      { id: '.img2', timeout: 4932 },
                      { id: '.img3', timeout: 5315 },
                      { id: '.img4', timeout: 5315 },
                      { id: '.img5', timeout: 5700 },
                      { id: '.img6', timeout: 5700 },
                    ];



$('#b1').on('click', function() {
  $('#launch').addClass('hidden');

  if (jsPsych.data.getURLVariable('debug') === 'true') {
    $('.debug').css({'display': 'block'});
  }
  Promise.all(configuration.map(promiseGenerator)).then(() => {
    setTimeout(function(){
        $('#end-trial').click()
    }, 3000);
  });
});
