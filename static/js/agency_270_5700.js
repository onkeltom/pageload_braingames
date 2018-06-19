// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 270 },
                      { id: '.footer', timeout: 270 },
                      { id: '.spacer', timeout: 270 },
                      { id: '.right_header', timeout: 1175 },
                      { id: '.left_title', timeout: 1175 },
                      { id: '.right_title', timeout: 1175 },
                      { id: '.footer_left', timeout: 1175 },
                      { id: '.test', timeout: 2080 },
                      { id: '.text1', timeout: 2985 },
                      { id: '.text2', timeout: 2985 },
                      { id: '.text3', timeout: 2985 },
                      { id: '.left_header', timeout: 2985 },
                      { id: '.worklist', timeout: 2985 },
                      { id: '.about', timeout: 2985 },
                      { id: '.img1', timeout: 3890 },
                      { id: '.img2', timeout: 3890 },
                      { id: '.img3', timeout: 4795 },
                      { id: '.img4', timeout: 4795 },
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
