
exports.createUser=(req,res)=>{
    try{
        const {name,email,phone,password}=req.body
        console.log(name,email,phone,password);
        return res.status(200).json({message:"user Created"})
    }
    catch(err){
        return res.status(500).json({message:err})
    }
}