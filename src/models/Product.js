const mongoose = require('mongoose');

const ProductModel = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    existence:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    createdate:{
        type: Date,
        default: Date.now()

    }
});


module.exports = mongoose.model('Product',ProductModel);