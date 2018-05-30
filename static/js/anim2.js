var args = [
    { args : "#element2", delay: 2000},
    { args : "#element1", delay : 3500  },
    // { arg : "#end-trial", delay : 4000}
];

function promiseGenerator({msg, timeout}) {
	return new Promise((resolve, reject) => {
  	setTimeout(() => {
			$(msg).css({'display': 'block'});
      resolve();
    }, timeout)
  })
}

var promises = [{msg: "#element1", timeout: 2000}, {msg: "#element2", timeout: 3000}];

$('#b1').on('click', function() {
  $('#launch').addClass('hidden');
  Promise.all(promises.map(promiseGenerator)).then(() => {
    setTimeout(function(){
        $('#end-trial').click()
    }, 1000);
  });
});
