const User=require('../models/user.js')
const jwt =require('jsonwebtoken')

exports.signUp = async (req, res) => {
    try {
        const product = await User.create(req.body);
        res.status(200).json({
            status: "success",
            message: "user created successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}

exports.login=async (req,res)=>{
    const {email,password}=req.body
    // console.log(req.body)
    let user= await User.findOne({email})
    if(user){
        if(user.password==password){
            let token= jwt.sign({id:user._id},process.env.SECRET_KEY)
            res.status(200).json({
                status: "success",
                message: "login successfully",
                token:token
            });
        }else{
            res.status(400).json({
                status: "failed",
                message: 'wrong password'
            })
        }

    }else{
        res.json({
            status: "failed",
            message: 'user not found'
        })
    }
}
