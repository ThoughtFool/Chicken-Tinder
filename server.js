var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

//creates json parser
var jsonParser = bodyParser.json();

//url-encoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

//parse to make custom json
app.use(bodyParser.json({type: "application/*+json"}))

//parse custom inside
app.use(bodyParser.raw({type: "application/vnd.custom-type"}))

//parse html body - becomes string
app.use(bodyParser.text({type: "text/html"}))

//allows port to listen for user inputs
app.listen(PORT, function(){
    console.log("I'm listening on port #: " + PORT);
});