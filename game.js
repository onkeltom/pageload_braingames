'use strict';

var total_score = 0;

var firstpaint = 0;
var tttext = 0;
var ttimages = 0;
var plt = 0;
const jitter = 0.2;
var verification = '';
var interaction_data = '';

var my_secret_key = '1c9f105664f47c290961f64ace2c879a6c6942e6d1935732ccca70c63803fbea';
var urlvar = jsPsych.data.urlVariables();
//console.log(urlvar.campaign);
//console.log(urlvar.worker);
//console.log(urlvar.randkey);
var string_final = urlvar.campaign + urlvar.worker + urlvar.randkey + my_secret_key;
verification = 'mw-'+sha256(string_final);
//console.log(verification);

// definiting two different response scales that can be used on the rating scales.
var bags_option = ["0", "1", "2", "3", "4", "5", "6"];
var qoe_option = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// preload all image files in the test
 var images = ['static/img/bag.jpg', 'static/img/branding.png',
               'static/img/decor.jpg', 'static/img/lens.jpg',
               'static/img/watch.jpg', 'static/img/shoes.jpg',
               'static/img/logo.png', 'static/img/marketing.png',
               'static/img/notebook.jpg', 'static/img/sunglasses.jpg',
               'static/img/web.png', 'static/img/website.png',
               'static/img/slider.png', 'static/img/city.jpg',
               'static/img/city_play.jpg', 'static/img/coutinho.jpg',
               'static/img/curry.jpg', 'static/img/blank.jpg',
               'static/img/work-4.jpg', 'static/img/side-ad.png',
               'static/img/ad-blank.png', 'static/img/microphone.png'
             ];

 // create the answer sheet to each stimulus
 // code piece needs to be before creating the test stimuli blocks
 // to make the nested timelines work

 // var evaluate = {
 //     type: 'html-slider-response',
 //     stimulus: '<p>How did you experience the loading of the last page?</p>',
 //     labels: ['slowest experience', 'fastest experience'],
 //     // prompt: "<p> refers to the slowest loading and <emph>10</emph> to the fastest loading experience.</p>",
 //     min: 0,
 //     max: 10,
 //     start: 5,
 //     // initialize the slider scale to a random position at each trial
 //     on_start: function(trial){
 //       // trial.start = Math.floor(Math.random() * 11);
 //     },
 //     // This adds the current random scale init to data as well as the stimulus that was scored here
 //     on_finish: function(data){
 //       data.scale_init = jsPsych.currentTrial().start;
 //       total_score = total_score + (5000 - jsPsych.data.get().last(1).values()[0].rt);
 //       // console.log(total_score);
 //     }
 // };

 var evaluate = {
  type: 'survey-multi-choice',
  questions: [{prompt: "<b>How did you experience the loading of the last page?</b><p>0 refers to the slowest experience, 10 refers to the fastest experience.</p>", options: qoe_option, required: true, horizontal: true}, {prompt: "<b>How many football players or red bags did you find on the previous page?</b>", options: bags_option, required: true, horizontal: true,}],
};

// This variable is where you will define the test_data
// Each line is one stimulus for which one will select the url in the timeline for content to be shown
// and link it to a js_url which will contain the specific animation for this content.

var training_data = [
  { data: {js_url: "static/js/news_450_900_2250_3000.js" }, timeline: [{url: "static/html/news.html"},evaluate] },
//  { data: {js_url: "static/js/news_600_1200_3000_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_750_1500_2250_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_750_1500_3750_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1000_2000_3000_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_1200_1500_2400_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_1200_1800_2400_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_1250_2500_3750_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_1600_2000_3200_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/news_1600_2400_3200_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_2000_2500_4000_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  // { data: {js_url: "static/js/news_2000_3000_4000_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_450_900_2250_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  // { data: {js_url: "static/js/agency_600_1200_3000_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
 { data: {js_url: "static/js/agency_750_1500_2250_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  // { data: {js_url: "static/js/agency_750_1500_3750_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_1000_2000_3000_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_1200_1500_2400_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_1200_1800_2400_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_1250_2500_3750_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_1600_2000_3200_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
 { data: {js_url: "static/js/agency_1600_2400_3200_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
//  { data: {js_url: "static/js/agency_2000_2500_4000_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_2000_3000_4000_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] }
];

// similar to the training data, create an array that holds all trials under test
// each trial consists of a nexted timeline of the test site followed by assessment task

var test_data = [
  { data: {js_url: "static/js/news_450_900_2250_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_600_1200_3000_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_750_1500_2250_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_750_1500_3750_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1000_2000_3000_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1200_1500_2400_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1200_1800_2400_3000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1250_2500_3750_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1600_2000_3200_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_1600_2400_3200_4000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_2000_2500_4000_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/news_2000_3000_4000_5000.js" }, timeline: [{url: "static/html/news.html"}, evaluate] },
  { data: {js_url: "static/js/agency_450_900_2250_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_600_1200_3000_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_750_1500_2250_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_750_1500_3750_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1000_2000_3000_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1200_1500_2400_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1200_1800_2400_3000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1250_2500_3750_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1600_2000_3200_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_1600_2400_3200_4000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_2000_2500_4000_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] },
  { data: {js_url: "static/js/agency_2000_3000_4000_5000.js" }, timeline: [{url: "static/html/agency_3col.html"}, evaluate] }
];

// create a shuffled array from test_data including randomized order and repetition
var shuffled_training_data = jsPsych.randomization.repeat(training_data, 1) // no repetition
//var shuffled_test_data = jsPsych.randomization.repeat(test_data, 2) // incl one repetition
var shuffled_test_data = jsPsych.randomization.repeat(test_data, 1) // no repetition

// start creating the actual test routine in an empty timeline
var timeline = [];

var welcome = {
  type: 'instructions',
    pages: [   // "<p></p>",
      "<h3>Thank you for your participation in this \"BrainGame\"</h3>" +
      "<p>Before starting the test, please read the test instructions carefully on the next page.</p>",
  ],
  show_clickable_nav: true,
  allow_keys: false
};

timeline.push(welcome);

var instructions = {
  type: "external-html",
  url: "static/html/inst2.html",
  cont_btn: "consent"
};

timeline.push(instructions)

// The instructions block at the very beginning to introduce users to the test
// create as a variable and push it to timeline
// var welcome = {
//   type: 'instructions',
//     pages: [   // "<p></p>",
//       "<h3>Thank you for your participation in this \"BrainGame\"</h3>" +
//       "<p>BrainGames use research techniques from cognitive science<br>to better understand how our minds work when using the web</p>" +
//       "<p>That understanding can improve web experiences by<br>tailoring them around data contributed through your participation</p>" +
//       "<p>Left and right arrow keys navigate<br>back and forward through the instructions</p>",
//
//       "<p><strong>Please do NOT do any of the following things,<br>or you will be disqualified to prevent invalidating results:</strong></p>" +
//       "<ul><li>Hit ESC to exit fullscreen mode</li><li>Switch tabs or programs during the procedure</li><li>Zoom in or out</li><li>Reload the page once you have begun trials</li></ul>" +
//       "<p>You will be taken out of fullscreen mode after completing the study</p>",
//
//       "<p>On each trial of this experiment<br>you will load the same website under different conditions.<br>The website looks like this:</p>" + "<img id ='screenshot' src='static/img/website.png'></img>" +
//       "<p>Depending on your screen size, the website may look a bit different in your browser.<br>In some cases, you will not be able to see all elements at once on your screen.</p>",
//
//       "<p>During the test, there are a total of "+test_data.length*2+" trials to capture enough data for us to draw conclusions.<br></p>" +
//       "<p>To familiarize yourself with the test, we will do a training session and present you with the maximum differences between conditions.<br>" +
//       "You will also be able to practice the rating task that we will explain next.<br>" +
//       // "Correct trials earn a point for each remaining millisecond in the 5 sec period<br>We want you to respond as fast as you can without making mistakes</p>" +
//       "<p>The training sessions begins beyond this final instruction screen, you will not be able to go backward from here</p>"
//   ],
//   show_clickable_nav: true,
//   allow_keys: false
// };
//
// timeline.push(welcome);

// var training_pt1 = {
//   type: 'instructions',
//     pages: [   // "<p></p>",
//       "<h3>Training</h3>" +
//       "<p>Before starting with the test, we want you to familiarize with the test procedure and the rating scale." +
//       "<br>Therefore, we will present you " +training_data.length+ " trials which represent the maximum range of differences between conditions.</p>" +
//       "<p>You will start each page load by clicking on a button. After the page has finished loading, you will automatically be redirected to give your rating.</p>",
//
//       "<p>On the slider that you will see, you are asked to judge your experience of the previous page load." +
//       "<br>There is no right or wrong. We do these tests to better understand our users.<br>Trying to be consistent in your ratings is all that we ask from you.</p>" +
//       "<img id ='slider' src='static/img/slider.png'></img>" +
//       "<p>Please respond as quickly as possible.<br>You will have up to 5 seconds, but faster responses earn more points." +
//       "You will earn a point for each remaining millisecond in the 5 sec period<br>We want you to respond as fast as you can without becoming inconsistent.</p>" +
//       "<p>The training begins beyond this final instruction screen, you will not be able to go backward from here.</p>"
//   ],
//   show_clickable_nav: true,
//   allow_keys: false
// };
//
// timeline.push(training_pt1);

// after introduction, launch a training and anchoring to familiarize participants
// with the range of perceivable differences between stimuli and make them practice
// the rating after each trial

var training_block = {
  type: "external-html",
  timeline: shuffled_training_data,
  cont_btn: "end-trial",
  data: {
    bags: 1,
    football: 0,
  },
  executeScript: true,
  on_start: function(trial){
    trial.bags = Math.floor(Math.random() * 6);
    trial.data.bags = trial.bags+1;
    trial.football = Math.floor(Math.random() * 3);
    trial.data.football = trial.football;
  },
  on_finish: function(data){
    data.configuration = JSON.stringify(configuration);
    // console.log(JSON.stringify(configuration));
  }
}

timeline.push(training_block)

// Again, repeat the goal of the study and then tell the participant what to expect
// during the actual test

var before_test_starts = {
  type: 'instructions',
  pages: [
      '<p>This is the end of the training.</p>' +
      // '<p>For your information, during the training, you received a total score of <span id=score></span> out of ' + training_data.length * 5000 + ' points.</p>' +
      '<p>During the test, you will now see ' +test_data.length+ ' page loads that you will have to rate similar to the training.</p>' +
      'The study begins directly after this screen.',
  ],
  show_clickable_nav: true,
  allow_keys: false,
  on_load: function(){
    // $('#score').text(total_score);
  },
  on_finish: function(data){
    total_score = 0;
  }
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
  data: {
    bags: 1,
    football: 0,
  },
  executeScript: true,
  on_start: function(trial){
    trial.bags = Math.floor(Math.random() * 6);
    trial.data.bags = trial.bags+1;
    trial.football = Math.floor(Math.random() * 3);
    trial.data.football = trial.football;
  },
  on_finish: function(data){
    data.configuration = JSON.stringify(configuration);
    // console.log(JSON.stringify(configuration));
  }
};

timeline.push(test_block)

// post-test survey about impact factors

var post_test_survey = { // still just a test
  type: 'survey-text',
  preamble: '<h3>Final question about page loading:</h3>',
  questions: [{prompt: "What is for you the most important thing for a fast page loading experience? Please describe on what you focus most.", rows: 10, columns: 100}],
  on_finish: function() {
    interaction_data = jsPsych.data.getInteractionData();
    jsPsych.data.get().addToLast({interaction: interaction_data.json()});
  }
};

timeline.push(post_test_survey)

// study debrief

var debrief_block = {
  type: "html-keyboard-response",
  stimulus: function() {

    return "<p>Thank you very much for participating." +
    // "<br>You scored a total of <span id=totalscore></span> points during the test." +
    // "<br>That's a fantastic score.<br>Congratulation!</p>" +
    "<p>The goal of this test is to better understand what makes pages load fast for our users." +
    "<br>With the results, we will be able to create an ever faster experience for Firefox Quantum." +
    "Thank you for contributing!</p>" +
    "<p>Your Microworkers verification code is: <b>"+verification+"</b></p>" +
    "<p>Press any key to complete the experiment.</p>"

  },
  on_load: function(){
    // $('#totalscore').text(total_score);
    jsPsych.data.addProperties({campaign: urlvar.campaign, worker: urlvar.worker, randkey: urlvar.randkey, verificationcode: verification});
    // console.log(verification);
  },
};

timeline.push(debrief_block)

// this is jsPsych init function to start the test.
jsPsych.init({
      timeline: timeline,
      preload_images: images, // preload all images in the test as defined at top
      // show_progress_bar: true,
      // on_trial_finish: function() {
      //   interaction_data = jsPsych.data.getInteractionData();
      //   console.log(interaction_data.json());
      // },
      on_finish: function() {
         // jsPsych.data.displayData();
      }
});
