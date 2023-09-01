const express=require('express')
const route=require('./routes/route')
const cors = require('cors');
const bodyParser=require('body-parser')
const sequelize=require("./util/database")

//------------  controllers  --------------
const chatModel=require("./models/chatModel")
const groupModel=require("./models/groupModel")
const userModel=require("./models/userModel")

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/',route)

userModel.hasMany(groupModel)
groupModel.hasMany(userModel)

userModel.hasMany(chatModel)
chatModel.belongsTo(userModel)

chatModel.belongsTo(groupModel)
groupModel.hasMany(chatModel)

sequelize.sync().then(app.listen(3000,function(){
    console.log('App running on port 3000');
}))
.catch((err)=>console.log(err))

