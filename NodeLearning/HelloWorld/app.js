var http = require("http");

//run on localhost, listen on port 3000
http.createServer(function(request, response){
  res.writeHead(200, {'Content-type' : 'text/plan' })
  response.end("hello world!"); //call end whenever client is requesting from a get request
}).listen(3000);

console.log("server is running on 127.0.0.1:3000");
//to run the file, run this in a terminal (in this directory!)
//node app.js
