var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var FalcorServer = require('falcor-express');
var falcorRouterDemoFactory = require('falcor-router-demo');

app.use(bodyParser.urlencoded({ extended: false }))

// Simple middleware to handle get/post
app.use('/model.json', FalcorServer.dataSourceRoute(function(req, res) {
    return falcorRouterDemoFactory();
}));

app.use(express.static('.'));

var server = app.listen(9090, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("navigate to http://localhost:9090");
});
