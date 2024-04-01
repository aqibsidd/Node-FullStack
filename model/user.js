const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    option_a: {
        type: String,
        required: true
    },
    option_b: {
        type: String,
        required: true
    },
    option_c: {
        type: String,
        required: true
    },
    option_d: {
        type: String,
        required: true
    },
    correct_option:{
        type:String,
        enum:['option_a','option_b','option_c','option_d']
    }
})
module.exports = mongoose.model('User', userSchema)