const Admin=require('../models/admin.js')
const jwt =require('jsonwebtoken')


exports.login=async (req,res)=>{
    const {email,password}=req.body
    let admin= await Admin.find({email})
    if(admin){
        if(password==admin.password){
            let token=jwt.sign({email:email},process.env.SECRET_KEY)
            res.json({
                status:'success',
                token:token
            })
        }else{
            res.json({
                status:'failed',
                message:'wrong password'
            })
        }
    }else{
        res.json({
            status:'failed',
            message:'user not found'
        })
    }
}

