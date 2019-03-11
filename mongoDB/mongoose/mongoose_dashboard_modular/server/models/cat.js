var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required"], minlength: [2, "Name must have at least 2 characters"] },
    breed: { type: String, required: [true, "A breed is required"], minlength: [2, "Breed must have at least 2 characters"] },
    color: { type: String, required: [true, "A color is required"], minlength: [2, "Color must have at least 2 characters"] }
})
var Cat = mongoose.model('Cat', CatSchema)

module.exports = Cat