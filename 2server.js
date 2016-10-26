//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT=7000;
var PORT2=7500;

var feelGoodStatements = ["You are awesome!", "Great Job!", "thumbs up!", "Funny you are!"];
var feelBadStatements = ["You are better off dead", "Trying is not for you", "You bore me", "You did great....NOT"]
var randomIndex = Math.floor(Math.random() * feelGoodStatements.length);
var randomFeelGood = feelGoodStatements[randomIndex];
var randomFeelBad = feelBadStatements[randomIndex];

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log(randomFeelGood + " on port: %s", PORT);
});

server.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log(randomFeelBad + " on port: %s", PORT2);
});

