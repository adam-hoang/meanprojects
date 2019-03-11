var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required"], minlength: [2, "Names must have at least 2 characters"]},
    quote: { type: String, required: [true, "A quote is required"], minlength: [2, "Quotes must have at least 2 characters"]},
    updatedAt: Date
})
var Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote
