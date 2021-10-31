const express = require('express')
const router =express.Router()
var jwt = require('jsonwebtoken');
var fetchuser=require("../middleware/fetchuser");

const jwt_token=""

const mongoose=require('mongoose')
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
const postSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    img:String,
    about:String,
    postStatus:{
        type:String,
        required:true
    },
    display:String,
    date:{
        type:String
    }
    
  });

router.get('/read',fetchuser,async(req,res)=>{
    try {
        const Kitten = mongoose.model('users', kittySchema);
        const userid= req.fluffy.id
        const user = await Kitten.findById(userid);
        const notemodel= mongoose.model('notes',postSchema);
        const notesdata = await notemodel.find({"name": user.name})
        res.status(200).send(notesdata);

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})

router.post('/create',fetchuser,async(req,res)=>{
    try {
        const Kitten = mongoose.model('users', kittySchema);
        const userid= req.fluffy.id
        const user = await Kitten.findById(userid);
        const notemodel= mongoose.model('notes',postSchema);
        const today= new Date()
        const fluffy = new notemodel({ name : user.name,img:user.img,about:user.about,display:req.body.display , postStatus:req.body.postStatus , date : today});
        fluffy.save();
        console.log(fluffy)
        res.status(200).send("post added");

    } catch (error) {
        res.status(500).send({"error":"Internal Server error"})
    }
})

router.get('/allpost' ,  async(req,res)=>{

    try {
        const notemodel= mongoose.model('notes',postSchema);
        const notesdata = await notemodel.find()
        res.status(200).send(notesdata);
        
    } catch (error) {
        res.status(500).send({"error":"INternal server error"})
    }
})


module.exports=router;