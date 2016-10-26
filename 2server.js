//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT=7000;
var PORT2=7500;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("You are awesome only on port: %s", PORT);
});

server.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("You suck on port: %s", PORT2);
});

connnection.end();