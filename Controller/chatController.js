const chatModel=require("../models/chatModel")
const userModel=require("../models/userModel")

exports.chat=async(req,res)=>{
    try{
        const userId=req.userId
        const message=req.body.message
        console.log(userId);
        // const messageString = JSON.stringify(message);
        console.log(message);
        await chatModel.create({userId,message})
        return res.status(200).json({ message: "authorized" })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message:err }) 
    } 
}  
exports.messages=async(req,res)=>{
    try{
        console.log("message backend");
        const messages=await chatModel.findAll({
            attributes:["message","userId"]
        })
        console.log(messages);
        return res.status(200).json({ message: "authorized", data:messages })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message:err }) 
    }
}