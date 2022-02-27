const mongoose=require("mongoose");

const schema=mongoose.Schema;

let productSchema=new schema({
    productID:{type:Number, unique: true,},
    productName:{type:String,},
    discription:{type:String,},
    price:{type:Number},
    img:{type:String}, 
    status:{type:Boolean}  
});

module.exports=mongoose.model("product",productSchema);