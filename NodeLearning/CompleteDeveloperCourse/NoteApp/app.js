console.log("Starting Note app");

const fs = require('fs'); //pass in the name of the module we'd like to require

fs.appendFile('greetings.txt', 'Hello from text file');
//node app.js   -> running this should create a file with contents as the second argument
