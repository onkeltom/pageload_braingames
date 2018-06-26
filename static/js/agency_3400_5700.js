// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 3400 },
                      { id: '.footer', timeout: 3400 },
                      { id: '.spacer', timeout: 3400 },
                      { id: '.right_header', timeout: 3783 + 3783 * randn_bm() },
                      { id: '.left_title', timeout: 3783 + 3783 * randn_bm() },
                      { id: '.right_title', timeout: 3783 + 3783 * randn_bm() },
                      { id: '.footer_left', timeout: 3783 + 3783 * randn_bm() },
                      { id: '.test', timeout: 4166 + 4166 * randn_bm() },
                      { id: '.text1', timeout: 4549 + 4549 * randn_bm() },
                      { id: '.text2', timeout: 4549 + 4549 * randn_bm() },
                      { id: '.text3', timeout: 4549 + 4549 * randn_bm() },
                      { id: '.left_header', timeout: 4549 + 4549 * randn_bm() },
                      { id: '.worklist', timeout: 4549 + 4549 * randn_bm() },
                      { id: '.about', timeout: 4549 + 4549 * randn_bm() },
                      { id: '.img1', timeout: 4932 + 4932 * randn_bm() },
                      { id: '.img2', timeout: 4932 + 4932 * randn_bm() },
                      { id: '.img3', timeout: 5315 + 5315 * randn_bm() },
                      { id: '.img4', timeout: 5315 + 5315 * randn_bm() },
                      { id: '.img5', timeout: 5700 },
                      { id: '.img6', timeout: 5700 },
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
