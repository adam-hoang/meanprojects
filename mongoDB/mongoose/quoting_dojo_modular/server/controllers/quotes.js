// var mongoose = require('mongoose');
var Quote = require('../models/quote.js');
module.exports = {
    index: function(req, res) {
        res.render('index')
    },
    show: function(req, res) {
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
    },
    create: function(req, res) {
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
    }
};