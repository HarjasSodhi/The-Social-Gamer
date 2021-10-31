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

router.post('/signin', async(req, res) => {

    try {
        const Kitten = mongoose.model('users', kittySchema);
        let user=await Kitten.findOne({email:req.body.email});
        if(user){
            res.status(400).json({"error":"This Email Already exist."})
        }
            const fluffy = new Kitten({ name : req.body.name , email : req.body.email ,game:req.body.game, about:req.body.about , img:req.body.img , password : req.body.password});
            fluffy.save();
            console.log(fluffy)
            
            var token = jwt.sign({id : fluffy.id}, jwt_token);
            console.log(token)
            res.status(200).json({token})
    } catch (error) {
        console.log(error);
        res.status(401).json({"error":"try again..."})
    }
    // console.log(req.body)


})

router.post('/login',async(req,res)=>{
    const Kitten = mongoose.model('users', kittySchema);
    const user=await Kitten.findOne({"email":req.body.email})
    try {
        if(!user){
            res.status(400).send({"error":"user with this email doesn't exist"})
        }
        else{
            if(user.password===req.body.password){
                var token = jwt.sign({id : user.id}, jwt_token);
                res.status(200).json({token})
        }
    else{
        res.status(401).send({"error":"Incorrect Password"})
    }}
        
    } catch (error) {
        res.status(500).send({"error":"Internal server error"})
        console.log(error)
    }


})


router.get('/getdata',fetchuser,async(req,res)=>{

    try {
        const Kitten = mongoose.model('users', kittySchema);
        const userid= req.fluffy.id
        const user = await Kitten.findById(userid)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})



module.exports=router;