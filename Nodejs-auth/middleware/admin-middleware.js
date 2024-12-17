const isAdminMiddleware=(req,res,next)=>{
    if(req?.userInfo?.role !=="admin"){
        return res.status(403).json({success:false,message:"access denied,need admin rights"})
    }
}

module.exports=isAdminMiddleware