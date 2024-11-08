const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const userRoutes=require('./routes/user.js')
const adminRoutes=require('./routes/admin.js')
const cartRoutes=require('./routes/cart.js')
const cors=require('cors')
const port = 3001;
require('dotenv').config()
// console.log(process.env)
const app = express();

app.use(cors({
    origin:'*'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use('/product',productRouter);
app.use('/admin',adminRoutes)
app.use('/user',userRoutes);
app.use('/cart',cartRoutes)
mongoose.connect("mongodb+srv://ankur:ankur123@cluster0.dambm29.mongodb.net/project1")
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.log(err);
    });
app.listen(port, () => {
    console.log("server running on port 3000");
})


