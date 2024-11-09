const Product = require('../models/product.js')
const user = require('../models/user.js')
const User = require('../models/user.js')
exports.addToCart =async (req, res) => {
    let userId = req.user
    let productId = req.params.productId
    
    try {
        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ status: 'failed', message: 'Product not found' });
        }
        // Find the user and their cart
        const user = await User.findById(userId);

        // Check if the product already exists in the cart
        const existingProductIndex = user.cart.findIndex(item => item.product.toString() === productId);
        
        if (existingProductIndex > -1) {
            // If the product exists, update the quantity
            user.cart[existingProductIndex].quantity += 1;
        } else {
            // If the product doesn't exist in the cart, add it
            user.cart.push({ product: productId, quantity:1 });
        }
        // Save the updated cart to the user document
        await user.save();
        res.status(200).json({status:'success',cart:user.cart});
    } catch (error) {
        console.error(error);
        res.status(500).json({status:'failed', message: 'Error adding product to cart' });
    }
}

exports.getCart=async (req,res)=>{
    let userId = req.user
    try {
        let user=await User.findById(userId).populate('cart.product')
        res.json({status:'success',cart:user.cart})
    } catch (error) {
        res.json({status:'failed',message:error.message})
    }
}
exports.removeFromCart= async (req,res)=>{
    let userId = req.user
    let productId = req.params.productId
    // console.log(userId,productId)
    try {
        let user=await User.findById(userId)
        user.cart=user.cart.filter(v=>v.product.toString()!=productId)
        await user.save()
        res.json({status:'success',message: 'cart updated'})
    } catch (error) {
        res.json({status:'failed',message:error.message})
    }
}