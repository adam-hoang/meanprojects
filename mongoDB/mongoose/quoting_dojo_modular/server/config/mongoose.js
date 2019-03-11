var mongoose = require('mongoose');
var mongooseConnect = mongoose.connect('mongodb://localhost/quoting_dojo');
module.exports = mongooseConnect;