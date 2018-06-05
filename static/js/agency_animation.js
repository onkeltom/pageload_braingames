// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [ { id: '#hero', timeout: 900},
                      { id: '#header', timeout: 1350},
                      { id: "#service", timeout: 1800}, 
                      { id: '#first_row', timeout: 2250},
                      { id: '#second_row', timeout: 2700}
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
