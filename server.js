//Used dting on Github to help with OS match function

var express = require("express");
var app = express();

app.get('/', function (req, res) {
  var IPaddress = req.headers["x-forwarded-for"];
  var lang = req.headers["accept-language"].split(",")[0];
  var OS = req.headers["user-agent"].match(/\((.*?)\)/)[1];
  
  res.json({
      ipaddress: IPaddress,
      language: lang,
      software: OS
  });
})

app.listen(8080, function () {
  console.log('Listening on port 8080!');
})