var mongoose = require('mongoose');
var mongooseConnect = mongoose.connect('mongodb://localhost/1955');
module.exports = mongooseConnect;