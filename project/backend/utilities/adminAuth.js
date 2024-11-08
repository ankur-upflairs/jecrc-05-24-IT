const jwt =require('jsonwebtoken')

exports.adminAuth=async (req,res,next)=>{
    let token=req.headers.authorization
    // console.log(token)
    try {
        let decode= jwt.verify(token,process.env.SECRET_KEY)
        // console.log(decode)
        next()
        
    } catch (error) {
        res.json({
            status:'failed',
            message:error.message
        })
    }    
}
