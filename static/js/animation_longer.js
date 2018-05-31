// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [ { id: '#content-wrapper', timeout: 300},
                      { id: '#top', timeout: 600},
                      { id: "#logo", timeout: 800},
                      { id: '#nav', timeout: 850},
                      { id: '#sub-nav', timeout: 1000},
                      { id: '#footer', timeout: 1200},
                      { id: '.p_hidden', timeout: 1400},
                      { id: '.heading', timeout: 1900},
                      { id: '.h1_hidden', timeout: 2300},
                      { id: '.img_hidden', timeout: 3000},
                      { id: '#video_content', timeout: 3500},
                      { id: '#ad', timeout: 5000},
                      { id: '#sidebar_ads', timeout: 5000},
                    ];

// promiseGenerator function will create a series of timeout events based on then
// configuration variable and execute them.
// Using promises here makes sure that we keep the presentation order
function promiseGenerator({id, timeout}) {
	return new Promise((resolve, reject) => {
  	setTimeout(() => {
			$(id).css({'display': 'block'});
      resolve();
    }, timeout)
  })
}

$('#b1').on('click', function() {
  $('#launch').addClass('hidden');
  Promise.all(configuration.map(promiseGenerator)).then(() => {
    setTimeout(function(){
        $('#end-trial').click()
    }, 3000);
  });
});
