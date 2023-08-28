const jwt=require("jsonwebtoken")

exports.authenticate=async(req,res,next)=>{
    try{
        const token=req.header("Authorization")
        const data=jwt.verify(token,"hello")
        console.log("Authorization");
        console.log(data)
        req.userId=data.userId
        next()
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message:err })
    }
}