var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');
   
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, './client/static')));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);
require('./server/config/mongoose.js');

app.listen(8000, function() {
    console.log("listening on port 8000");
})
