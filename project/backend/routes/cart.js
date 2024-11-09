let express=require('express')
const { addToCart, getCart,removeFromCart } = require('../controllers/Cart')
const { userAuth } = require('../utilities/userAuth')
let router=express.Router()

router.get('/',userAuth,getCart)
router.delete('/:productId',userAuth,removeFromCart)
router.get('/:productId',userAuth,addToCart)


module.exports=router
