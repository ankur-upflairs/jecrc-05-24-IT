const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        address: {
            type: String,
        },
        mob: {
            type: Number,
        }
    },
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

module.exports=mongoose.model('User',userSchema)