const express=require('express')

const userController=require('../Controller/userController')
const chatController=require("../Controller/chatController")
const groupModel=require("../Controller/groupController")
const middle=require("../middleware/middle")

const router=express.Router()

router.post('/createUser',userController.createUser)
router.post('/login',userController.login)

router.post('/chat',middle.authenticate,chatController.chat)
router.get('/messages',chatController.messages)

router.post('/createGroup',middle.authenticate,groupModel.createGroup)
router.get('/getGroups',middle.authenticate,groupModel.getGroups)

module.exports=router