// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(
            {
                'origin': '*',
                'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
                'preflightContinue': true,
                'credentials': true
            }
)); 
var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/healthcheck', function(req, res) {
    res.json({ message: 'Welcome to linus application - Hotel -> '+new Date()});   
});
app.get('/api/*', function(req, res) {
    res.json({ message: 'hooray! welcome to lin api! , Method get' });   
});
app.post('/api/*', function(req, res) {
    res.json({ message: 'hooray! welcome to lin api! , Method post' });   
});
// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port,()=>{
	console.log("Started listening...................")	
});
