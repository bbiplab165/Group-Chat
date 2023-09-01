const chatModel=require("../models/chatModel")
const userModel=require("../models/userModel")
const groupModel=require("../models/groupModel")

exports.chat=async(req,res)=>{
    try{
        const userId=req.userId
        const message=req.body.message
        console.log(userId);
        // const messageString = JSON.stringify(message);
        const groupId=await groupModel.findAll({where:{userId}})
        console.log(groupId);
        await chatModel.create({message,userId})
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
            attributes:["message","userId","id"],
            limit: 10,  // Limit to 10 records
            order: [['id', 'DESC']] // Order by id in descending order
        })
        const reversedMessages = messages.reverse();
        return res.status(200).json({ message: "authorized", data:reversedMessages })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ message:err }) 
    }
}