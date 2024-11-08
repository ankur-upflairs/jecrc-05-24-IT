const jwt =require('jsonwebtoken')

exports.userAuth=async (req,res,next)=>{
    let token=req.headers.authorization
    // console.log(token)
    try {
        let decode= jwt.verify(token,process.env.SECRET_KEY)
        // console.log(decode)
        req.user=decode.id
        next()        
    } catch (error) {
        res.json({
            status:'failed',
            message:error.message
        })
    }    
}
