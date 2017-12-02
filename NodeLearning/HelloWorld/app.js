var http = require("http");

//run on localhost, listen on port 3000
http.createServer(function(request, response){
  response.end("hello world!"); //call end whenever client is requesting from a get request
});
