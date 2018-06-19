// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 600 },
                      { id: '.footer', timeout: 600 },
                      { id: '.spacer', timeout: 600 },
                      { id: '.right_header', timeout: 1450 },
                      { id: '.left_title', timeout: 1450 },
                      { id: '.right_title', timeout: 1450 },
                      { id: '.footer_left', timeout: 1450 },
                      { id: '.test', timeout: 2300 },
                      { id: '.text1', timeout: 3150 },
                      { id: '.text2', timeout: 3150 },
                      { id: '.text3', timeout: 3150 },
                      { id: '.left_header', timeout: 3150 },
                      { id: '.worklist', timeout: 3150 },
                      { id: '.about', timeout: 3150 },
                      { id: '.img1', timeout: 4000 },
                      { id: '.img2', timeout: 4000 },
                      { id: '.img3', timeout: 4850 },
                      { id: '.img4', timeout: 4850 },
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
