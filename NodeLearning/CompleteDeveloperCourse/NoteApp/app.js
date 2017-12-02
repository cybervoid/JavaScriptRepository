console.log("Starting Note app");

//Require a built-in node application
const fs = require('fs'); //pass in the name of the module we'd like to require
const myCode = require('./myjavascript.js'); //code ive written
//pass in module name exactly as it appears in the package.json file (also the same as used to install the module with npm).
const _ = require('lodash')
useCallback = false;
enableCreateFile = false;

console.log(_.isString(true));
console.log(_.isString("cybervoid"));

var uniqueArray = _.uniq(['cybervoid', 'cybervoid', 'tommy', 'sally', 'sara', 1, 1, 2, '1', 3, 4]);
console.log(uniqueArray);

if(enableCreateFile == true){
  if(useCallback == true)
  {
    //run this as a callback function
    fs.appendFile("greetingsAsCallback.txt", "Hello from callback function!", function(err){
      if(err){
        console.log("Unable to write to file");
      }
    });
  }
  else {
    //run file create without a callback function
    fs.appendFile('greetings.txt', 'Hello from text file');
  }//node app.js   -> running this should create a file with contents as the second argument
}
