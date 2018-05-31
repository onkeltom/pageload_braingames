// ******
// Please define your load animation in the configuration variable.
// Note that each page needs to have a (hidden) button called #end-trial that will
// be used to close the trial and move on to the user rating task
// ******

var configuration = [{id: "#element1", timeout: 2000},
                    {id: "#element2", timeout: 3000}
                    ];

// promiseGenerator function will create a series of timeout events based on then
// configuration variable and execute them.
// Using promises here makes sure that we keep the presentation order
function promiseGenerator({msg, timeout}) {
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
    }, 1000);
  });
});
