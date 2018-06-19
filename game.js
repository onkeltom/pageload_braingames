'use strict';



// preload all image files in the test
 var images = ['static/img/bag.jpg', 'static/img/branding.png',
               'static/img/decor.jpg', 'static/img/lens.jpg',
               'static/img/watch.jpg', 'static/img/shoes.jpg',
               'static/img/logo.png', 'static/img/marketing.png',
               'static/img/notebook.jpg', 'static/img/sunglasses.jpg',
               'static/img/web.png',
             ];

 // create the answer sheet to each stimulus
 // code piece needs to be before creating the test stimuli blocks
 // to make the nested timelines work

 var evaluate = {
     type: 'html-slider-response',
     stimulus: '<p>How fast did you experience the last page to load?</p>',
     labels: ['slowest experience', 'fastest experience'],
     // prompt: "<p> refers to the slowest loading and <emph>10</emph> to the fastest loading experience.</p>",
     min: 0,
     max: 10,
     // initialize the slider scale to a random position at each trial
     on_start: function(trial){
       trial.start = Math.floor(Math.random() * 11);
     },
     // This adds the current random scale init to data as well as the stimulus that was scored here
     on_finish: function(data){
       data.scale_init = jsPsych.currentTrial().start;
     }
 };

// This variable is where you will define the test_data
// Each line is one stimulus for which one will select the url in the timeline for content to be shown
// and link it to a js_url which will contain the specific animation for this content.

var training_data = [
  { data: {js_url: "static/js/agency_270_443.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  // { data: {js_url: "static/js/agency_270_1000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_270_2000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  // { data: {js_url: "static/js/agency_270_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_600_1000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_600_2000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  // { data: {js_url: "static/js/agency_600_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1200_2000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  // { data: {js_url: "static/js/agency_1200_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_3400_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
];

// similar to the training data, create an array that holds all trials under test
// each trial consists of a nexted timeline of the test site followed by assessment task

var test_data = [
    { data: {js_url: "static/js/agency_270_443.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_270_1000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_270_2000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_270_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_600_1000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_600_2000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_600_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_1200_2000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_1200_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
    { data: {js_url: "static/js/agency_3400_5700.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
];

// create a shuffled array from test_data including randomized order and repetition
var shuffled_training_data = jsPsych.randomization.repeat(training_data, 1) // no repetition
var shuffled_test_data = jsPsych.randomization.repeat(test_data, 2) // incl one repetition

// start creating the actual test routine in an empty timeline
var timeline = [];

// The instructions block at the very beginning to introduce users to the test
// create as a variable and push it to timeline
var welcome = {
  type: 'instructions',
    pages: [   // "<p></p>",
      "<h3>Thank you for your participation in this \"BrainGame\"</h3>" +
      "<p>BrainGames use research techniques from cognitive science<br>to better understand how our minds work when using the web</p>" +
      "<p>That understanding can improve web experiences by<br>tailoring them around data contributed through your participation</p>" +
      "<p>Left and right arrow keys navigate<br>back and forward through the instructions</p>",

      "<p><strong>Please do NOT do any of the following things,<br>or you will be disqualified to prevent invalidating results:</strong></p>" +
      "<ul><li>Hit ESC to exit fullscreen mode</li><li>Switch tabs or programs during the procedure</li><li>Zoom in or out</li><li>Reload the page once you have begun trials</li></ul>" +
      "<p>You will be taken out of fullscreen mode after completing the study</p>",

      "<p>On each trial of this experiment<br>you will load the same website under different conditions.<br>The website looks like this:</p>" + "<img id ='screenshot' src='static/img/website.png'></img>" +
      "<p>Depending on your screen size, the website may look a bit different in your browser.<br>In some cases, you will not be able to see all elements at once on your screen.</p>",

      "<p>During the test, there are a total of "+test_data.length*2+" trials to capture enough data for us to draw conclusions.<br></p>" +
      "<p>To familiarize yourself with the test, we will do a training session and present you with the maximum differences between conditions.<br>" +
      "You will also be able to practice the rating task that we will explain next.<br>" +
      "Correct trials earn a point for each remaining millisecond in the 5 sec period<br>We want you to respond as fast as you can without making mistakes</p>" +
      "<p>The training sessions begins beyond this final instruction screen, you will not be able to go backward from here</p>"
  ],
  // show_clickable_nav: true
};

timeline.push(welcome);

var training_pt1 = {
  type: 'instructions',
    pages: [   // "<p></p>",
      "<h3>Thank you for your participation in this \"BrainGame\"</h3>" +
      "<p>BrainGames use research techniques from cognitive science<br>to better understand how our minds work when using the web</p>" +
      "<p>That understanding can improve web experiences by<br>tailoring them around data contributed through your participation</p>" +
      "<p>Left and right arrow keys navigate<br>back and forward through the instructions</p>",

      "<p><strong>Please do NOT do any of the following things,<br>or you will be disqualified to prevent invalidating results:</strong></p>" +
      "<ul><li>Hit ESC to exit fullscreen mode</li><li>Switch tabs or programs during the procedure</li><li>Zoom in or out</li><li>Reload the page once you have begun trials</li></ul>" +
      "<p>You will be taken out of fullscreen mode after completing the study</p>",

      "<p>On each trial of this experiment<br>you will load the same website under different conditions.<br>The website looks like this:</p>" + "<img id ='screenshot' src='static/img/website.png'></img>" +
      "<p>Depending on your screen size, the website may look a bit different in your browser.<br>In some cases, you will not be able to see all elements at once on your screen.</p>",

      "<p>During the test, there are a total of "+test_data.length*2+" trials to capture enough data for us to draw conclusions.<br></p>" +
      "<p>To familiarize yourself with the test, we will do a training session and present you with the maximum differences between conditions.<br>" +
      "You will also be able to practice the rating task that we will explain next.<br>" +
      "Correct trials earn a point for each remaining millisecond in the 5 sec period<br>We want you to respond as fast as you can without making mistakes</p>" +
      "<p>The training sessions begins beyond this final instruction screen, you will not be able to go backward from here</p>"
  ],
  // show_clickable_nav: true
};

timeline.push(training_pt1);

// show the participant an example of how the rating slider will look like
// we actually use a trial of the real evaluate page with additional explanations
// this creates an interactive page so that the user can actually move the slider

var evaluate_intro = {
    type: 'html-slider-response',
    stimulus: '<p>How fast did you experience the last page to load?</p>',
    labels: ['slowest experience', 'fastest experience'],
    prompt: "<p> This is the scale that is used to evaluate the loading.</p><p>another paragraph</p>",
    min: 0,
    max: 10,
    // initialize the slider scale to a random position at each trial
    on_start: function(trial){
      trial.start = Math.floor(Math.random() * 11);
    },
    // This adds the current random scale init to data as well as the stimulus that was scored here
    on_finish: function(data){
      data.scale_init = jsPsych.currentTrial().start;
    }
};

timeline.push(evaluate_intro)

// after introduction, launch a training and anchoring to familiarize participants
// with the range of perceivable differences between stimuli and make them practice
// the rating after each trial

var training_block ={
  type: "external-html",
  timeline: shuffled_training_data,
  cont_btn: "end-trial",
  executeScript: true
}

timeline.push(training_block)

// Again, repeat the goal of the study and then tell the participant what to expect
// during the actual test

var before_test_starts = {
  type: 'instructions',
  pages: [
      'Welcome to the experiment. Click next to begin.',
  ],
  show_clickable_nav: true
};

timeline.push(before_test_starts)

// define the test block using the shuffled set of test stimuli and (potentially) repetition
// push it to timeline

var test_block = {
  type: "external-html",
  timeline: shuffled_test_data,
  // randomize_order: true,
  // repetitions: 2,
  cont_btn: "end-trial",
  executeScript: true
};

timeline.push(test_block)

// this is jsPsych init function to start the test.
jsPsych.init({
      timeline: timeline,
      preload_images: images, // preload all images in the test as defined at top
      // show_progress_bar: true,
      on_finish: function() {
        jsPsych.data.displayData();
      }
});
