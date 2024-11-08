let express=require('express')
const { addToCart } = require('../controllers/Cart')
const { userAuth } = require('../utilities/userAuth')
let router=express.Router()

router.get('/:productId',userAuth,addToCart)


module.exports=router
