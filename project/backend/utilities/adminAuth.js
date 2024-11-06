const jwt =require('jsonwebtoken')

exports.auth=async (req,res,next)=>{
    let token=req.headers.authorization
    // console.log(token)
    let decode= jwt.verify(token,process.env.SECRET_KEY)
    console.log(decode)
    res.json({hello:'hello'})
}
