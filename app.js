//Dependencies for use express
var express = require('express');
var path    = require("path");

// Run express
var app = express();
// Define the main path with static content
app.use(express.static(__dirname+'/src'));
// Disable the cache of the server, for reload the changes
app.disable('view cache');

app.get('/*', function(req,res){

  //Complet the route with 'index.html' if try to access in '/'
    if (req.url === '/') { req.url+='index.html'; }
    //This block is the manager of server, here trought of 'if' redirect for one or other page
    if (req.url === '/index.html') {
      res.sendFile(__dirname+'/index.html'); //Redirect from home page
    } else {
      res.status(404).sendFile(__dirname+'/404.html'); //Redirect page not found with status 404
    }
});
// Specify the port i want to use for the server
app.listen(8000, function () {
  console.log("Esperando peticiones en el puerto 8000");
});

