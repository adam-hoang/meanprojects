var mongoose = require('mongoose');
var mongooseConnect = mongoose.connect('mongodb://localhost/cat_dashboard');
module.exports = mongooseConnect;