var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');
var bcrypt = require('bcryptjs');
var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
app.set('trust proxy', 1);

mongoose.connect('mongodb://localhost/login_reg_mean');
var UserSchema = new mongoose.Schema({
    first: { type: String, required: [true, "A first name is required!"], minlength: [2, "First Name must have at least 2 characters!"]},
    last: { type: String, required: [true, "A last name is required!"], minlength: [2, "Last Name must have at least 2 characters!"]},
    email: { type: String, required: [true, "An email address is required!"], minlength: [2, "Email must have at least 2 characters!"]},
    password: { type: String, required: [true, "A password is required!"], minlength: [2, "Password must have at least 2 characters!"]},
    birthday: { type: Date, required: [true, "A birthday is required!"]},
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User')
   
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

app.get('/', function(req, res) {
    res.render('index');
})

app.post('/register', function(req, res) {
    if (emailRegex.test(req.body.email) == false) {
        req.flash('errorMsg', "Not valid Email format!");
        res.redirect('/');
    }
    else if (req.body.password != req.body.confirm) {
        req.flash('errorMsg', "Confirm password does not match password!");
        res.redirect('/');
    }
    else {
        bcrypt.hash(req.body.password, 10, function(ruhroh, hashed_password){
            if(ruhroh){
                console.log('Sum Ting Wong!')
                res.redirect('/');
            } else {
                User.findOne({email:req.body.email}, (err, user) => {
                    if (user) {
                        req.flash('errorMsg', "Email already taken!");
                        res.redirect('/');
                    }
                    else {
                        var newUser = new User({first: req.body.first, last: req.body.last, email: req.body.email, password: hashed_password, birthday: req.body.birthday,});
                        newUser.save(function(err) {
                            if(err) {
                                for(var key in err.errors){
                                    req.flash('errorMsg', err.errors[key].message);
                                }
                                console.log('Sum Ting Wong!', err);
                                res.redirect('/');
                            }
                            else {
                                console.log('Successfully added a user!');
                                req.session.email = req.body.email;
                                req.session.first = req.body.first;
                                res.redirect('/success');
                            }
                        })
                    }
                })
                
            }
        })
    }
})

app.post('/login', function(req, res) {
    console.log(" req.body: ", req.body);
    User.findOne({email:req.body.email}, (err, user) => {
        if (!user) {
            req.flash('errorMsg', "Email not registered!");
            res.redirect('/');
        }
        else {
            bcrypt.compare(req.body.password, user.password)
            .then( result => {
                if (result == true) {
                    req.session.email = user.email;
                    req.session.name = user.name;
                    res.redirect('/success');
                }
                else {
                    req.flash('errorMsg', "Password incorrect!");
                    res.redirect('/');
                }
            })
            .catch( error => {
                console.log('Sum Ting Wong!')
                res.redirect('/');
            })
        }
    })
})

app.get('/success', function(req, res) {
    var user = {
        first: req.session.first,
        email: req.session.email,
    }
    res.render('success', {data: user});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
