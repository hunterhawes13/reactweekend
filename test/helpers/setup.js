require('babel-register')
require('babel-polyfill')

//This is going to be run before all your tests to create a new browser like environment

//this is the starter DOM for our particular test
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
//jsdom is going to create a document for us and we're going to create a window
global.window = document.defaultView
//this is so it can go back and forth, page to page
global.navigator = window.navigator 

// global variable that floats from all of node instance
//this is setting up your global to be browser like
