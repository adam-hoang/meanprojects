var session = require('express-session');
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.get('/', function (req, res){
    if (!req.session.counter){
        req.session.counter = 0;
    }
    req.session.counter++;
    res.render('index', {counter: req.session.counter});
    });
app.get('/add2', function (req, res){
    req.session.counter += 1; 
    res.redirect('/');
});
app.get('/reset', function (req, res){
    req.session.counter = 0; 
    res.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})