// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 270 },
                      { id: '.footer', timeout: 270 },
                      { id: '.spacer', timeout: 270 },
                      { id: '.right_header', timeout: 558 + 558 * randn_bm() },
                      { id: '.left_title', timeout: 558 + 558 * randn_bm() },
                      { id: '.right_title', timeout: 558 + 558 * randn_bm() },
                      { id: '.footer_left', timeout: 558 + 558 * randn_bm() },
                      { id: '.test', timeout: 846 + 846 * randn_bm() },
                      { id: '.text1', timeout: 1134 + 1134 * randn_bm() },
                      { id: '.text2', timeout: 1134 + 1134 * randn_bm() },
                      { id: '.text3', timeout: 1134 + 1134 * randn_bm() },
                      { id: '.left_header', timeout: 1134 + 1134 * randn_bm() },
                      { id: '.worklist', timeout: 1134 + 1134 * randn_bm() },
                      { id: '.about', timeout: 1134 + 1134 * randn_bm() },
                      { id: '.img1', timeout: 1422 + 1422 * randn_bm() },
                      { id: '.img2', timeout: 1422 + 1422 * randn_bm() },
                      { id: '.img3', timeout: 1710 + 1710 * randn_bm() },
                      { id: '.img4', timeout: 1710 + 1710 * randn_bm() },
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
