// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
                      { id: '.head', timeout: 270 },
                      { id: '.footer', timeout: 270 },
                      { id: '.spacer', timeout: 270 },
                      { id: '.right_header', timeout: 298 },
                      { id: '.left_title', timeout: 298 },
                      { id: '.right_title', timeout: 298 },
                      { id: '.footer_left', timeout: 298 },
                      { id: '.test', timeout: 326 },
                      { id: '.text1', timeout: 354 },
                      { id: '.text2', timeout: 354 },
                      { id: '.text3', timeout: 354 },
                      { id: '.left_header', timeout: 354 },
                      { id: '.worklist', timeout: 354 },
                      { id: '.about', timeout: 354 },
                      { id: '.img1', timeout: 382 },
                      { id: '.img2', timeout: 382 },
                      { id: '.img3', timeout: 410 },
                      { id: '.img4', timeout: 410 },
                      { id: '.img5', timeout: 443 },
                      { id: '.img6', timeout: 443 },
                    ];

// generate normal distribution scaling factor function
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

// promiseGenerator function will create a series of timeout events based on then
// configuration variable and execute them.
// Using promises here makes sure that we keep the presentation order
function promiseGenerator({id, timeout}) {
	return new Promise((resolve, reject) => {
  	setTimeout(() => {
      if (jsPsych.data.getURLVariable('debug') === 'true') {
        $('.debug').html(id + ' visible after ' + timeout + 'ms.');
      };
      if (id === '.test') {
          $(id).css({'display': 'block'});
      } else {
        $(id).css({'visibility': 'visible'});
      };
      resolve();
    }, timeout + (timeout * 0.2 * randn_bm()));
  })
}

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
