var args = [
    { args : "#element2", delay: 500},
    { args : "#element1", delay : 1000},
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

var promises = [{msg: "#element1", timeout: 1000}, {msg: "#element2", timeout: 500}];

$('#b1').on('click', function() {
  $('#launch').addClass('hidden');
  Promise.all(promises.map(promiseGenerator)).then(() => {
    setTimeout(function(){
        $('#end-trial').click()
    }, 1000);
  });
});
