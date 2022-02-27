//const { nextTick } = require("process");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const Myproduct = require("../model/product.model");
//http://localhost:4000/product/test
exports.test = (req, res) => res.send("I am tested");


//http://localhost:4000/product/create
exports.create = (req, res) => {
    let product = new Myproduct({
        productID: req.body.productID,
        productName: req.body.productName,
        discription: req.body.discription,
        price: req.body.price,
        img: req.body.img,
        status: req.body.status
    })
    product.save(function (err) {
        if (err) {
            return nextTick(err)
        }
        res.send({ message: "product added successFully." });
    })


}
//http://localhost:4000/product/all
exports.all = (req, res) => {
    Myproduct.find(function (err, result) {
        if (err) {
            return next(err);
        }
        res.send(result);
    });
}

//http://localhost:4000/product/620f76c8499c7fe669622dfc
exports.details = (req, res) => {

    //var query={product_id:req.params.product_id}

    Myproduct.findById(req.params.id, function (err, result) {
        if (err) {
            return next(err)
        }
        res.send(result);
    })
}



//http://localhost:4000/product/deleteProduct/2

exports.delete = (req, res,next) => {
    try {
        console.log(req.params.id);
         let pid = req.params.id;
        Myproduct.deleteOne({_id:pid}, function (err, result) {
            if (err) {
                
                return next(err);
            }
            res.send("Recored is deleted")
        });
    }
    catch (e) {
        res.send({ message: "product not deleted." });
    }
}


exports.update = (req, res) => {
    try {
        // pes.ObjectId(req.params.id);
        const { objID, productID, productName, discription, price, img, status } = req.body;
     
        console.log(req.body);
        Myproduct.updateOne({ _id: objID }, req.body).then(function (result) {
            Myproduct.findOne({ _id: objID }).then(function (result) {
                res.send({ message: "product updated successFully." });
            })
        })
    }
    catch (e) {
        res.send({ message: "product not updated successFully." });
    }
}


exports.updateProduct = (req, res) => {
    //    let id= mongoose.Ty
    try {
        // const {productID,productName,discription,price,img,status}=req.body;

        Myproduct.updateOne({ productID: req.params.id }, req.body).then(function (result) {
            Myproduct.findOne({ productID: req.params.id }).then(function (result) {
                res.send({ message: "product updated successFully." });
            });
        });

    }
    catch (e) {
        res.send({ message: "product not updated successFully." });
    }
}




