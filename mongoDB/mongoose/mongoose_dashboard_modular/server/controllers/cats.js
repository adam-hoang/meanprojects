var Cat = require('../models/cat.js');

module.exports = {
    index: function(req, res) {
        Cat.find({}, function (err, cats) {
            if (err) {
                console.log('something went wrong index');
            }
            else {
                res.render('index', { cats: cats });
            }
        })
    },
    newCat: function(req, res) {
        res.render('new');
    },
    newCatPost: function(req, res) {
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
    },
    showCat: function(req, res) {
        Cat.findOne({ _id: req.params.id }, function (err, cat) {
            console.log(cat);
            if (err) {
                console.log('something went wrong show route');
            }
            else {
                res.render('show', { cat: cat });
            }
        })
    },
    editCat: function(req, res) {
        Cat.findOne({ _id: req.params.id }, function (err, cat) {
            if (err) {
                console.log('something went wrong');
            }
            else {
                res.render('edit', { cat: cat });
            }
        })
    },
    editCatPost: function(req, res) {
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
    },
    destroy: function(req, res) {
        Cat.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log('something went wrong');
            }
            else {
                res.redirect('/');
            }
        })
    },
}