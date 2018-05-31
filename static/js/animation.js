// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [ { id: '#content-wrapper', timeout: 100},
                      { id: '#top', timeout: 350},
                      { id: "#logo", timeout: 500},
                      { id: '#nav', timeout: 550},
                      { id: '#sub-nav', timeout: 650},
                      { id: '.p_hidden', timeout: 800},
                      { id: '#footer', timeout: 550},
                      { id: '.heading', timeout: 900},
                      { id: '.h1_hidden', timeout: 1100},
                      { id: '.img_hidden', timeout: 1600},
                      { id: '#video_content', timeout: 1900},
                      { id: '#ad', timeout: 2000},
                      { id: '#sidebar_ads', timeout: 3200},
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
