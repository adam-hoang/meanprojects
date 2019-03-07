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
    res.render('index');
    });
app.post('/result', function (req, res){
    req.session.name = req.body.name;
    req.session.dojo = req.body.dojo;
    req.session.lang = req.body.lang;
    req.session.comment = req.body.comment;
    res.redirect('/result');
});
app.get('/result', function (req, res){
    var survey_array = {
        name: req.session.name,
        dojo: req.session.dojo,
        lang: req.session.lang,
        comment: req.session.comment,
    };
    res.render('results', {x: survey_array});
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})