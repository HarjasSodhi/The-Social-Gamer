const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
var byname=require("../middleware/byname");

const jwt_token=""

const mongoose=require('mongoose');
const { appendFile } = require('fs');
MongoDbURL='';
mongoose.connect(MongoDbURL);
var db=mongoose.connection;

db.on('error',console.error.bind(console,"Connection error : "))
db.once('open' , function (){
    console.log("Database is Ready.... ")
});
const kittySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    img:String,
    email:{
        type:String,
        unique:true
    },
    game:{
        type:String,
        required:true
    },
    about:String,
    password: {
        type:String,
        required:true
    }
  });


router.get('/name',byname,async(req,res)=>{
    try {
        const Kitten = mongoose.model('users', kittySchema);
        const det= req.fluffy;
        const user = await Kitten.findOne({"name":det});
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({"error":"Internal Server Error"})
    }

})


module.exports=router