const mongoose=require("mongoose");

const schema=mongoose.Schema;

let cartSchema=new schema({
    userID:{type:String, unique: true, },
    product:[{
        productOID:{type:String, unique: true,},
        quantity:{type:Number, },
    }]
    
});

module.exports=mongoose.model("cart",cartSchema);