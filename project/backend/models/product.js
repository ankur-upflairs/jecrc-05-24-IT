const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    newPrice: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
