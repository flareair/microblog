var express = require("express");
var path = require("path");
var app = express();
var errorHandler = require("./errorHandler");
var bodyParser = require('body-parser');
var logger = require('morgan');

var port = 3000;

app.set("title", "Express App");
app.set("view engine", "jade");


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
  res.render("index", {
    pageTitle: "Express app | Main page "
  });
});

errorHandler(app);

app.listen(port, function() {
  console.log("Listening on port %d", server.address().port);
});
