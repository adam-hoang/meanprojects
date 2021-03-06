var Task = require('../models/task.js');

module.exports = {
    index: function(req, res) {
        Task.find({}, function (err, tasks) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message: "Show all tasks!", tasks});
            }
        })
    },
    showTask: function(req, res) {
        Task.findOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message: "Show task!", task});
            }
        })
    },
    newTask: function(req, res) {
        var task = new Task({ title: req.body.title, description: req.body.description, completed: req.body.completed });
        task.save(function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message: "Added task!", task});
            }
        })
    },
    editTask: function(req, res) {
        Task.findOne({ _id: req.params.id }, function (err, task) {
            if (err) {
                res.json(err);
            }
            else {
                if (req.body.title){
                    task.title = req.body.title;
                }
                if (req.body.description){
                    task.description = req.body.description;
                }
                if (req.body.completed){
                    task.completed = req.body.completed;
                }
                task.save(function (err){
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json({message: "Edited task!", task});
                    }
                })
            }
        })
    },
    removeTask: function(req, res) {
        Task.remove({ _id: req.params.id }, function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message: "Removed task!", removedTask: req.params.id});
            }
        })
    },
}