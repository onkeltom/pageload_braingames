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
  pages: [
      'Welcome to the experiment. Click next to begin.',
      'This is the second page of instructions.',
      'First, let us start with a little training.'
  ],
  show_clickable_nav: true
};

timeline.push(welcome);

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
