var User = require('../models/user.js');

module.exports = {
    index: function(req, res) {
        User.find({}, function (err, users) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(users);
            }
        })
    },
    newUser: function(req, res) {
        var user = new User({ name: req.params.name});
        user.save(function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(user);
            }
        })
    },
    removeUser: function(req, res) {
        User.remove({ name: req.params.name }, function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({removedUser: req.params.name});
            }
        })
    },
    showUser: function(req, res) {
        User.findOne({ name: req.params.name }, function (err, user) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(user);
            }
        })
    }
}