const express=require('express')
const { login } = require('../controllers/admin.js')
const router=express.Router()

router.post('/login',login)


module.exports=router