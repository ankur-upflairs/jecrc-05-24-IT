const User=require('../models/user.js')
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
    let user= User.findOne({email})
    if(user){
        if(user.password==password){
            res.status(200).json({
                status: "success",
                message: "login successfully",
                token:'token'
            });
        }
    }else{
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
}
