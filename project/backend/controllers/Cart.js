const Product = require('../models/product.js')
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
            user.cart[existingProductIndex].quantity += quantity;
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
