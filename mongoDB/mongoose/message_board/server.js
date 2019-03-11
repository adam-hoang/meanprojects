var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');

mongoose.connect('mongodb://localhost/message_board');

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A name is required"]},
    comment: {type: String, required: [true, "Comments cant be empty"], minlength: [3, "Comments must have at least 3 characters"]},
}, {timestamps: true})

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "A name is required"]},
    message: {type: String, required: [true, "Messages cant be empty"], minlength: [3, "Messages must have at least 3 characters"]},
    comments: [CommentSchema]
}, {timestamps: true})

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

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
    Message.find({}, function (err, messages) {
        if (err) {
            console.log('something went wrong index:messages');
        }
        else {
            res.render('index', { data: messages});
        }
    })
})

app.post('/newMessage', function (req, res) {
    var text = new Message({ name: req.body.name, message: req.body.message});
    text.save(function (err) {
        if (err) {
            for (var key in err.errors) {
                req.flash('errorMsg', err.errors[key].message);
            }
            console.log('Something went wrong! newMessage route', err);
            res.redirect('/');
        }
        else {
            console.log('successfully added a message!');
            res.redirect('/');
        }
    })
})

app.post('/newComment/:id', function (req, res) {
    if (req.body.name == "" || req.body.comment == "") {
        req.flash('errorMsg', "Both Name and Comment fields must be filled out!");
        res.redirect("/");
    } else {
        Message.updateOne({ _id: req.params.id }, {$push: {comments: {name: req.body.name, comment: req.body.comment}}}, function (err) {
            console.log('successfully added a comment!');
            res.redirect('/');
        })
    }
})

app.listen(8000, function () {
    console.log("listening on port 8000");
})
