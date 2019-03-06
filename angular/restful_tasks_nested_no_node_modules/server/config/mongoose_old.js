var mongoose = require('mongoose');
var mongooseConnect = mongoose.connect('mongodb://localhost/restful_task_api');
module.exports = mongooseConnect;