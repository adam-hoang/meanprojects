var users = require('../controllers/users.js');

module.exports = function(app){
    app.get('/', function (req, res) {
        users.index(req, res);
    })
    app.get('/new/:name', function (req, res) {
        users.newUser(req, res);
    })
    app.get('/remove/:name', function (req, res) {
        users.removeUser(req, res);
    })
    app.get('/:name', function (req, res) {
        users.showUser(req, res);
    })
}
