// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 1200 },
                      { id: '.footer', timeout: 1200 },
                      { id: '.spacer', timeout: 1200 },
                      { id: '.right_header', timeout: 1950 + 1950 * randn_bm() },
                      { id: '.left_title', timeout: 1950 + 1950 * randn_bm() },
                      { id: '.right_title', timeout: 1950 + 1950 * randn_bm() },
                      { id: '.footer_left', timeout: 1950 + 1950 * randn_bm() },
                      { id: '.test', timeout: 2700 + 2700 * randn_bm() },
                      { id: '.text1', timeout: 3450 + 3450 * randn_bm() },
                      { id: '.text2', timeout: 3450 + 3450 * randn_bm() },
                      { id: '.text3', timeout: 3450 + 3450 * randn_bm() },
                      { id: '.left_header', timeout: 3450 + 3450 * randn_bm() },
                      { id: '.worklist', timeout: 3450 + 3450 * randn_bm() },
                      { id: '.about', timeout: 3450 + 3450 * randn_bm() },
                      { id: '.img1', timeout: 4200 + 4200 * randn_bm() },
                      { id: '.img2', timeout: 4200 + 4200 * randn_bm() },
                      { id: '.img3', timeout: 4950 + 4950 * randn_bm() },
                      { id: '.img4', timeout: 4950 + 4950 * randn_bm() },
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
