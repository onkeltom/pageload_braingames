// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******
//
// var configuration = [
//                       { id: '.head', timeout: 270 },
//                       { id: '.footer', timeout: 270 },
//                       { id: '.spacer', timeout: 270 },
//                       { id: '.right_header', timeout: 298 + 298 * randn_bm() },
//                       { id: '.left_title', timeout: 298 + 298 * randn_bm() },
//                       { id: '.right_title', timeout: 298 + 298 * randn_bm() },
//                       { id: '.footer_left', timeout: 298 + 298 * randn_bm() },
//                       { id: '.test', timeout: 326 + 326 * randn_bm() },
//                       { id: '.text1', timeout: 354 + 354 * randn_bm() },
//                       { id: '.text2', timeout: 354 + 354 * randn_bm() },
//                       { id: '.text3', timeout: 354 + 354 * randn_bm() },
//                       { id: '.left_header', timeout: 354 + 354 * randn_bm() },
//                       { id: '.worklist', timeout: 354 + 354 * randn_bm() },
//                       { id: '.about', timeout: 354 + 354 * randn_bm() },
//                       { id: '.img1', timeout: 382 + 382 * randn_bm() },
//                       { id: '.img2', timeout: 382 + 382 * randn_bm() },
//                       { id: '.img3', timeout: 410 + 410 * randn_bm() },
//                       { id: '.img4', timeout: 410 + 410 * randn_bm() },
//                       { id: '.img5', timeout: 443 },
//                       { id: '.img6', timeout: 443 },
//                     ];


firstpaint = 2000;
tttext = 2500;
ttimages = 4000;
plt = 5000;

var configuration = [
                      { id: '.head', timeout: firstpaint },
                      { id: '.footer', timeout: firstpaint },
                      { id: '.spacer', timeout: firstpaint },
                      { id: '.right_header', timeout: firstpaint },
                      { id: '.left_header', timeout: firstpaint },
                      { id: '.left_title', timeout: tttext - tttext * normalRandomInRange(0, jitter)  },
                      { id: '.right_title', timeout: tttext - tttext * normalRandomInRange(0, jitter)  },
                      { id: '.footer_left', timeout: tttext - tttext * normalRandomInRange(0, jitter)  },
                      { id: '.test', timeout: tttext - tttext * normalRandomInRange(0, jitter) },
                      { id: '.worklist', timeout: tttext - tttext * normalRandomInRange(0, jitter)  },
                      { id: '.about', timeout: tttext },
                      { id: '.text1', timeout: ttimages - ttimages * normalRandomInRange(0, jitter) },
                      { id: '.text2', timeout: ttimages - ttimages * normalRandomInRange(0, jitter) },
                      { id: '.text3', timeout: ttimages},
                      { id: '.img1', timeout: plt - plt * normalRandomInRange(0, jitter) },
                      { id: '.img2', timeout: plt - plt * normalRandomInRange(0, jitter) },
                      { id: '.img3', timeout: plt - plt * normalRandomInRange(0, jitter) },
                      { id: '.img4', timeout: plt - plt * normalRandomInRange(0, jitter) },
                      { id: '.img5', timeout: plt },
                      { id: '.img6', timeout: plt },
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
