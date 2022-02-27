const mongoose=require("mongoose");

const schema=mongoose.Schema;

let orderSchema=new schema({
    userID:{type: String},
    product:[{ 
        productID:{type:String},
        quantity:{type:Number},
    }],
    totalAmount:{type:Number},
    address:{type:String},
    phone:{type:Number},
    date:{type:Date,default:Date.now}
});

module.exports=mongoose.model("order",orderSchema);