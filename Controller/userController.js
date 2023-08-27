const userModel=require('../models/userModel')
const bcrypt=require('bcrypt')


exports.createUser=async(req,res)=>{
    try{
        const {name,email,phone,password}=req.body
        console.log(name,email,phone,password);
        if(!name||!email||!phone||!password)
        {
            return res.status(200).json({message:"Please enter all the filds"})
        }
        const userData=await userModel.findAll({where:{email:email}})
        if(userData.length>0){
            return res.status(200).json({message:"user already exists"})
        }
        bcrypt.hash(password,10,async (err,hash)=>{
            await userModel.create({
                name,email,phone,password:hash
            })
        })        
        return res.status(200).json({message:"user Created"})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err})
    }
}