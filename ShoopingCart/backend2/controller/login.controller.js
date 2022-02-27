//const { nextTick } = require("process");
const Myuser=require("../model/user.model");
const Mylogin=require("../model/login.model");
//http://localhost:4000/login/test
exports.test=(req,res)=>res.send("I am tested");


//http://localhost:4000/login/create
exports.create=(req,res)=>{

    const {userID,password}=req.body;
    Myuser.findOne({userID:userID},(err,user)=>{
        if(user){
            // res.send({message:"SuccessFully login"});
            res.send(user);
        }
        else{
            res.send({message:"userID not available."})
        
        }
    })


}

