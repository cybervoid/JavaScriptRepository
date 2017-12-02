console.log("Starting Note app");

const fs = require('fs'); //pass in the name of the module we'd like to require

useCallback = false;

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
