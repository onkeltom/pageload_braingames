'use strict';

var evaluate = {
  type: "html-button-response",
  stimulus: "This will later be a page to collect user feedback.",
	choices: ['load next page'],
	prompt: "<p>Please click button to load the next stimulus.</p>"
}

var test_data = [
    {data: {js_url: "static/js/animation.js"}, timeline: [{}, evaluate]},
    {data: {js_url: "static/js/animation.js"}, timeline: [{}, evaluate]}
];

var timeline = [];

var welcome = {
  type: "html-keyboard-response",
  stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

var launch = {
	type: "html-button-response",
  stimulus: "",
	choices: ['Start the test'],
	prompt: "<p>Please click button to start the test.</p>"
}

timeline.push(launch)

/* define test block */
var test_block = {
  type: "external-html",
  url: "static/html/index.html",
  timeline: test_data,
  randomize_order: true,
  cont_btn: "exit_stim",
  executeScript: true
};

timeline.push(test_block)

/* start the experiment */
jsPsych.init({
      timeline: timeline,
      on_finish: function() {
        jsPsych.data.displayData();
      }
});
