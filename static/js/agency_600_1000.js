// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 600 },
                      { id: '.footer', timeout: 600 },
                      { id: '.spacer', timeout: 600 },
                      { id: '.right_header', timeout: 666 },
                      { id: '.left_title', timeout: 666 },
                      { id: '.right_title', timeout: 666 },
                      { id: '.footer_left', timeout: 666 },
                      { id: '.test', timeout: 732 },
                      { id: '.text1', timeout: 798 },
                      { id: '.text2', timeout: 798 },
                      { id: '.text3', timeout: 798 },
                      { id: '.left_header', timeout: 798 },
                      { id: '.worklist', timeout: 798 },
                      { id: '.about', timeout: 798 },
                      { id: '.img1', timeout: 864 },
                      { id: '.img2', timeout: 864 },
                      { id: '.img3', timeout: 930 },
                      { id: '.img4', timeout: 930 },
                      { id: '.img5', timeout: 1000 },
                      { id: '.img6', timeout: 1000 },
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
