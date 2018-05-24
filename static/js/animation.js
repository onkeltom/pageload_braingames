var fakeload = function() {
 $('#launch').addClass('hidden');
 setTimeout(function() {
   $('#element1').css({'display': 'block'});
   setTimeout(function() {
     $('#element2').css({'display': 'block'});
     setTimeout(function() {
       $('#end-trial').click();
     }, 400);
   }, 400);
 }, 500);
}

$('#b1').on('click', fakeload);
