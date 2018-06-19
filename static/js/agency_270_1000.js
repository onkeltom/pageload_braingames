// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 270 },
                      { id: '.footer', timeout: 270 },
                      { id: '.spacer', timeout: 270 },
                      { id: '.right_header', timeout: 391 },
                      { id: '.left_title', timeout: 391 },
                      { id: '.right_title', timeout: 391 },
                      { id: '.footer_left', timeout: 391 },
                      { id: '.test', timeout: 512 },
                      { id: '.text1', timeout: 633 },
                      { id: '.text2', timeout: 633 },
                      { id: '.text3', timeout: 633 },
                      { id: '.left_header', timeout: 633 },
                      { id: '.worklist', timeout: 633 },
                      { id: '.about', timeout: 633 },
                      { id: '.img1', timeout: 754 },
                      { id: '.img2', timeout: 754 },
                      { id: '.img3', timeout: 875 },
                      { id: '.img4', timeout: 875 },
                      { id: '.img5', timeout: 1000 },
                      { id: '.img6', timeout: 1000 },
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
