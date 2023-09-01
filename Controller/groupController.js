const groupModel = require("../models/groupModel")

exports.createGroup = async (req, res) => {
    try {
        const userId = req.userId
        const groupName = req.body.name
        const groups = await groupModel.findAll();
        const length = groups.length;
        const members = length + 1
        await groupModel.create({ name: groupName, members: members ,userId})
        return res.status(201).json({ message: "Group craeted" })
    }
    catch (err) {
        console.log(err);
        return res.status(201).json({ message: err })
    }
}
exports.getGroups=async(req,res)=>{
    try{
        const userId=req.userId
        const groups=await groupModel.findAll({where:{userId}})
        return res.status(201).json({ message: "Group craeted" ,groups:groups})
    }
    catch(err){
        console.log(err);
        return res.status(201).json({ message: err })
    }
}