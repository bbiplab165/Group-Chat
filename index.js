const express=require('express')
const route=require('./routes/route')
const cors = require('cors');
const bodyParser=require('body-parser')

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/',route)

app.listen(3000,function(){
    console.log('App running on port 3000');
})