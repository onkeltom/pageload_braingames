// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [
  { id: '.head', timeout: 1200 },
  { id: '.footer', timeout: 1200 },
  { id: '.spacer', timeout: 1200 },
  { id: '.right_header', timeout: 1333 },
  { id: '.left_title', timeout: 1333 },
  { id: '.right_title', timeout: 1333 },
  { id: '.footer_left', timeout: 1333 },
  { id: '.test', timeout: 1466 },
  { id: '.text1', timeout: 1599 },
  { id: '.text2', timeout: 1599 },
  { id: '.text3', timeout: 1599 },
  { id: '.left_header', timeout: 1599 },
  { id: '.worklist', timeout: 1599 },
  { id: '.about', timeout: 1599 },
  { id: '.img1', timeout: 1732 },
  { id: '.img2', timeout: 1732 },
  { id: '.img3', timeout: 1865 },
  { id: '.img4', timeout: 1865 },
  { id: '.img5', timeout: 2000 },
  { id: '.img6', timeout: 2000 },
                    ];

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
    }, timeout);
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
