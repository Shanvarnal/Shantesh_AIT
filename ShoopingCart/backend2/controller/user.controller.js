//const { nextTick } = require("process");
const Myuser=require("../model/user.model");
//http://localhost:4000/user/test
exports.test=(req,res)=>res.send("I am tested");


//http://localhost:4000/user/create
exports.create=(req,res)=>{
    const {userName,userID,password,status,admin}=req.body;
    Myuser.findOne({userID:userID},(err,user)=>{
        if(user){
            res.send({message:"user allrearady registerd"})
        }
        else{
            let user= new Myuser({
                userName,
                userID,
                password,
                status,
                admin
            });
            // let user=new Myuser({
            //     userName:req.body.userName,
            //     userID:req.body.userID,
            //     password:req.body.password,
            //     status:req.body.status,
            //     admin:req.body.admin,
            //     cart:req.body.cart,
            //     order:req.body.order
            // })
            user.save(function(err){
            if(err)
            {
                return  nextTick(err)
            }
            res.send({message:"user registerd successFully."});
        })
        
        }
    })

  

}
//http://localhost:4000/user/all
exports.all=(req,res)=>{
    Myuser.find(function(err,result){
        // console.log("result",result);
        if(err)
        {
            return next(err);
        }
        res.send(result);
    });
}

//http://localhost:4000/user/620f76c8499c7fe669622dfc
exports.details=(req,res)=>
{

    //var query={user_id:req.params.user_id}

    Myuser.findById(req.params.id,function(err,result){
        if(err)
        {
            return next(err)
        }
        res.send(result);
    })
}

exports.update = (req, res) => {
    try {
        const  { objID,userName,password, userID, status, admin } = req.body;
        let obj={userName, userID, password,status, admin}
        console.log("objid: ",objID);
        console.log("req.body:",req.body);
        console.log("obj:",obj);
        Myuser.updateOne({ _id: objID }, obj).then(function (result) {
           
                res.send({ message: "user updated successFully." });
           
        })
    }
    catch (err) {
        console.log("Error", err);
        res.send({ message: "user not updated successFully." });
    }
}

exports.delete = (req, res,next) => {
    try {
        console.log("objID: ",req.params.id);
         let pid = req.params.id;
         Myuser.deleteOne({_id:pid}, function (err, result) {
            if (err) {
                
                return next(err);
            }
            res.send("Recored is deleted")
        });
    }
    catch (e) {
        res.send({ message: "user not deleted." });
    }
}



//update cart details in user
// exports.updateCart=(req,res)=>{
//     let cQuery={$set:{cart:req.body.cart}}
//     Myuser.findByIdAndUpdate(req.params.id,cQuery).then(function(result){
//         Myuser.findOne({_id:req.params.id}).then(function(result){
//             res.send({message:"user registerd successFully."});
//         })
//     })
// }

//add to ProductCart
// exports.addToCart=(req,res)=>{
//     let cQuery={$push:{cart:req.body.cart}}

//     Myuser.findByIdAndUpdateOne(req.params.id,cQuery).then(function(result){
//         Myuser.findOne({_id:req.params.id}).then(function(result){
//             res.send(result);
//         })
//     })
// }



// //delete to ProductCart
// exports.deletefromCart=(req,res)=>{
//     let cQuery={$push:{cart:req.body.cart}}
//         Myuser.findOne({_id:req.params.id}).then(function(result){
//             Myuser.findByIdAndUpdateOne(req.params.id,cQuery).then(function(result){
//             res.send(result);
//         })
//     })
// }


//update order details in user
// exports.updateOrder=(req,res)=>{
//     let cQuery={$push:{order:req.body.order}}
//     Myuser.findByIdAndUpdate(req.params.id,cQuery).then(function(result){
//         Myuser.findOne({_id:req.params.id}).then(function(result){
//             res.send(result);
//         })
//     })
// }

