const mongoose=require("mongoose");

const schema=mongoose.Schema;

let loginSchema=new schema({
    userID:{type:String,
        required: [true, ],
        unique: true,},
    password:{type:String,
        required: [true, ],
        minLength: [8,],
        select: false,},
});

module.exports=mongoose.model("login",loginSchema);