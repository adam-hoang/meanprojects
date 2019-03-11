var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

app.listen(8000, function () {
    console.log("listening on port 8000");
})