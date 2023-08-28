const express=require('express')

const userController=require('../Controller/userController')

const router=express.Router()

router.post('/createUser',userController.createUser)
router.post('/login',userController.login)

module.exports=router