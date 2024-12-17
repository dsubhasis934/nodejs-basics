const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    console.log("authHeader",authHeader) // Bearer 12345kjjkh
    const token=authHeader && authHeader.split(" ")[1] //so first we split bearer and token,then we take only token
    if(!token){
        return res.status(401).json({success:false,message:'Access denied,No token provided'})
    }

    //decode this token

    try {
      //verify the token
        const verifyToken=jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log("verifyToken",verifyToken)
        if(verifyToken){
            req.userInfo=verifyToken
            next()
        }
    } catch (error) {
        return res.status(500).json({success:false,message:'Access denied,invalid token'})
    }
}

module.exports=authMiddleware