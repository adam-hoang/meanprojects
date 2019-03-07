var express = require("express");
var app = express();
app.get('/', function(request, response) {
   response.sendFile(__dirname + "/static/index.html");
})
app.use(express.static(__dirname + "/static"));
app.listen(8000, function() {
  console.log("listening on port 8000");
})
