var cats = require('../controllers/cats.js');

module.exports = function(app){
    app.get('/', function (req, res) {
        cats.index(req, res);
    })
    app.get('/cats/new', function (req, res) {
        cats.newCat(req, res);
    })
    app.post('/cats', function (req, res) {
        cats.newCatPost(req, res);
    })
    app.get('/cats/:id', function (req, res) {
        cats.showCat(req, res);
    })
    app.get('/cats/edit/:id', function (req, res) {
        cats.editCat(req, res);
    })
    app.post('/cats/:id', function (req, res) {
        cats.editCatPost(req, res);
    })
    app.get('/cats/destroy/:id', function (req, res) {
        cats.destroy(req, res);
    })
}