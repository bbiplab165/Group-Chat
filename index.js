const express=require('express')
const route=require('./routes/route')
const cors = require('cors');
const bodyParser=require('body-parser')
const sequelize=require("./util/database")

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/',route)

sequelize.sync().then(app.listen(3000,function(){
    console.log('App running on port 3000');
}))
.catch((err)=>console.log(err))