const mongoose=require("mongoose");

const schema=mongoose.Schema;

let mrSchema=new schema({
    mrNo:{type:Number,},
    mrDate:{type:String},
    suplierName:{type:String,},
    productID:{type:String},
    productName:{type:String,},
    quantity:{type:Number},
    price:{type:Number},
    amount:{type:Number}
});

module.exports=mongoose.model("mr",mrSchema);