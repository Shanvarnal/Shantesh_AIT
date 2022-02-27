const mongoose=require("mongoose");

const schema=mongoose.Schema;

let userSchema=new schema({
    userName:{type:String,
        required: [true,],
        maxLength: [30, ],
        minLength: [4, ],},
    userID:{type:String,
        required: [true, ],
        unique: true,},
    password:{type:String,
        required: [true, ],
        minLength: [8,],
        select: true,},
    status:{type:String}, 
    admin:{type:Boolean},
    cart:[{
        productID:{type: schema.Types.ObjectId, ref:'product'},
        quantity:{type:Number}
    }],
    order:[{
        orderID:{type:Number},
        productID:{type: schema.Types.ObjectId, ref:'product'},
         quantity:{type:Number},
          rate:[{type: Number}],
        amount:[{type:Number}],
        totalAmount:{type:Number},
        address:{type:String},
        phone:{type:Number}
    }]   
});

module.exports=mongoose.model("user",userSchema);