var tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app.get('/tasks', function (req, res) {
        tasks.index(req, res);
    })
    app.get('/tasks/:id', function (req, res) {
        tasks.showTask(req, res);
    })
    app.post('/tasks', function (req, res) {
        tasks.newTask(req, res);
    })
    app.put('/tasks/:id', function (req, res) {
        tasks.editTask(req, res);
    })
    app.delete('/tasks/:id', function (req, res) {
        tasks.removeTask(req, res);
    })
}
