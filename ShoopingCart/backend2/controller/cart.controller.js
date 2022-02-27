//const { nextTick } = require("process");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const Mycart = require("../model/cart.model");
//http://localhost:4000/cart/test
exports.test = (req, res) => res.send("I am tested");


//http://localhost:4000/cart/create

exports.create = (req, res) => {
    console.log(req.body);
    let cart = new Mycart({
        userID: req.body.userID,
        product: req.body.product
    })
    cart.save(function (err) {
        if (err) {
            return nextTick(err)
        }
        res.send({ message: "cart added successFully." });
    })


}
//http://localhost:4000/cart/all
exports.all = (req, res) => {
    Mycart.find(function (err, result) {
        if (err) {
            return next(err);
        }
        res.send(result);
    });
}

//http://localhost:4000/cart/620f76c8499c7fe669622dfc
exports.details = (req, res) => {

    Mycart.findById(req.params.id, function (err, result) {
        if (err) {
            return next(err)
        }
        res.send(result);
    })
}



//http://localhost:4000/cart/deleteCart/2

exports.delete = (req, res,next) => {
    try {
        console.log(req.params.id);
         let pid = req.params.id;
        Mycart.deleteOne({_id:pid}, function (err, result) {
            if (err) {
                
                return next(err);
            }
            res.send({message:"Recored is deleted"})
        });
    }
    catch (e) {
        res.send({ message: "product not deleted." });
    }
}


exports.update = (req, res) => {
    try {
        const { objID,uID,cart, } = req.body;
        console.log(req.body);
        Mycart.updateOne({ _id: objID }, req.body).then(function (result) {
            Mycart.findOne({ _id: objID }).then(function (result) {
                res.send({ message: "product updated successFully." });
            })
        })
    }
    catch (e) {
        res.send({ message: "product not updated successFully." });
    }
}


exports.addtocart = (req, res) => {
    try {
        const { objID,product, } = req.body;
        console.log(req.body);
        let cQuery={$push:{product:req.body.product}}
        Mycart.updateOne({ _id: objID }, cQuery).then(function (result) {
            Mycart.findOne({ _id: objID }).then(function (result) {
                res.send({ message: "product added in cart array successFully." });
            })
        })
        
     
    }
    catch (e) {
        res.send({ message: "product not added successFully." });
    }
}

// exports.removecart = (req, res) => {
//     try {
//         const { objID,product, } = req.body;
//         console.log(req.body);
//         let cQuery={$pop:{product:product}}
//         Mycart.updateOne({ _id: objID }, cQuery).then(function (result) {
//             Mycart.findOne({ _id: objID }).then(function (result) {
//                 res.send({ message: "product removed in cart array successFully." });
//             })
//         })
        
     
//     }
//     catch (e) {
//         res.send({ message: "product not removed successFully." });
//     }
// }


exports.updatecart = (req, res) => {
    try {
        const { objID,product, } = req.body;
        console.log(req.body);
        let cQuery={$set:{product:req.body.product}}
        Mycart.updateOne({ _id: objID }, cQuery).then(function (result) {
            Mycart.findOne({ _id: objID }).then(function (result) {
                res.send({ message: "product updated in cart array successFully." });
            })
        })
        
     
    }
    catch (e) {
        res.send({ message: "product not updated in cart array successFully." });
    }
}







