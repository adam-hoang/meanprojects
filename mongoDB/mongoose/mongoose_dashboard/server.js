var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');

mongoose.connect('mongodb://localhost/cat_dashboard');
var CatSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    breed: { type: String, required: true, minlength: 2 },
    color: { type: String, required: true, minlength: 2 }
})
mongoose.model('Cat', CatSchema);
var Cat = mongoose.model('Cat')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    Cat.find({}, function (err, cats) {
        if (err) {
            console.log('something went wrong index');
        }
        else {
            res.render('index', { cats: cats });
        }
    })
})
app.get('/cats/new', function (req, res) {
    res.render('new');
})
app.get('/cats/:id', function (req, res) {
    Cat.findOne({ _id: req.params.id }, function (err, cat) {
        console.log(cat);
        if (err) {
            console.log('something went wrong show route');
        }
        else {
            res.render('show', { cat: cat });
        }
    })
})

app.post('/cats', function (req, res) {
    var cat = new Cat({ name: req.body.name, breed: req.body.breed, color: req.body.color });
    cat.save(function (err) {
        if (err) {
            for (var key in err.errors) {
                req.flash('errorMsg', err.errors[key].message);
            }
            console.log('Something went wrong!', err);
            res.redirect('/cats/new');
        }
        else {
            console.log('successfully added a cat!');
            res.redirect('/');
        }
    })
})

app.get('/cats/edit/:id', function (req, res) {
    Cat.findOne({ _id: req.params.id }, function (err, cat) {
        if (err) {
            console.log('something went wrong');
        }
        else {
            res.render('edit', { cat: cat });
        }
    })
})

app.post('/cats/:id', function (req, res) {
    Cat.update({ _id: req.params.id }, { name: req.body.name, breed: req.body.breed, color: req.body.color }, function (err) {
        if (req.body.name == "" || req.body.breed == "" || req.body.color == "") {
            req.flash('errorMsg', "All fields must be filled out!");
            console.log('Something went wrong!', err);
            res.redirect("/cats/edit/" + req.params.id);
        }
        else {
            console.log('successfully edited a cat!');
            res.redirect('/');
        }
    })
})

app.get('/cats/destroy/:id', function (req, res) {
    // check for id from url
    Cat.remove({ _id: req.params.id }, function (err) {
        if (err) {
            console.log('something went wrong');
        }
        else {
            res.redirect('/');
        }
    })
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
