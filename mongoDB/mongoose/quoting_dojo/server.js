var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var flash = require('express-flash');

mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required"], minlength: [2, "Names must have at least 2 characters"]},
    quote: { type: String, required: [true, "A quote is required"], minlength: [2, "Quotes must have at least 2 characters"]},
    updatedAt: Date
})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')
   
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
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
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if(err) {
            console.log('something went wrong');
        }
        else {
            quotes.sort(function(a, b) {
            var dateA = new Date(a.updatedAt), dateB = new Date(b.updatedAt);
            return dateB - dateA;
            });
            res.render('quotes', {quotes: quotes});
        }
    })
})
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote, updatedAt: new Date});
    quote.save(function(err) {
        if(err) {
            for(var key in err.errors){
                req.flash('errorMsg', err.errors[key].message);
            }
            console.log('Something went wrong!', err);
            res.redirect('/');
        }
        else {
            console.log('successfully added a quote!');
            res.redirect('/quotes');
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
