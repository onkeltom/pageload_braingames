var args = [
    { args : "#element2", delay: 500},
    { args : "#element1", delay : 1000},
    //{ arg : "#end-trial", delay : 4000}
];

function myFunction(args, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // here you do your stuff
      $(args).css({ 'display': 'block'});
      resolve(); // resolve the promise when it's done
    }, time);
  })
}

function endTrial(args, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      // here you do your stuff
      $(args).click();
      resolve(); // resolve the promise when it's done
    }, time);
  })
}

var promise = Promise.resolve();

function schedule() {
  args.forEach(function (animation) {
    promise = promise
      .then(myFunction.bind(null, animation.args, animation.delay))
      // ^ chaining promise so that they fire one after another
  });
}

$('#b1').on('click', function() {
  $('#launch').addClass('hidden');
  schedule();
});

// function myFunction(arg) {
//     $(arg).css({ 'display': 'block'});
// }
//
// function endTrial(arg) {
//   $(arg).click();
// }
//
// function schedule() {
//     var task = tasks.shift();
//     console.log(tasks.length)
//     console.log(task)
//
//     if(task) { // && tasks.length != 0) {
//         console.log("show function");
//         setTimeout(function() {
//             myFunction(task.arg);
//             if(tasks.length) schedule();
//         },task.delay);
//     } //else {
//       //console.log("end trail");
//       //endTrial(task.arg);
//       //if(tasks.length) schedule();
//     //}
// }
//
// $('#b1').on('click', function() {
//   $('#launch').addClass('hidden');
//   schedule();
//   setTimeout( function() {
//     $('#end-trial').click();
//   }, 1000);
// });
