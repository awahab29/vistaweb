// Load the http module to create an http server.
var http = require('http');
var xml = require('xml');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/xml"});
    var name_of_restaurants = "<note><to>Tove</to><from>Jani</from> </note>";

    response.end(name_of_restaurants);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");/**
 * Created by V_D on 1/8/2016.
 */
