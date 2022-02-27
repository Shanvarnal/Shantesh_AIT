//const { nextTick } = require("process");
const Myorder = require("../model/order.model");
//http://localhost:4000/order/test
exports.test = (req, res) => res.send("I am tested");


//http://localhost:4000/order/create
exports.create = (req, res,nextTick) => {
    try{
        console.log("obj",req.body);
    let order = new Myorder({
        userID: req.body.userID,
        product: req.body.product,
        totalAmount: req.body.totalAmount,
        date:req.body.date
    });
    order.save(function (err) {
        if (err) {
            return nextTick(err);
        }
       // res.send("Record is inserted");
       res.send({message:"Record is inserted"});
    });
    }catch(err)
    {
        console.log("err",err);
    }

}
//http://localhost:4000/order/all
exports.all = (req, res) => {
    Myorder.find(function (err, result) {
        if (err) {
            return next(err);
        }
        res.send(result);
    });
}

//http://localhost:4000/order/620f76c8499c7fe669622dfc
exports.details = (req, res) => {

    //var query={order_id:req.params.order_id}

    Myorder.findById(req.params.id, function (err, result) {
        if (err) {
            return next(err)
        }
        res.send(result);
    })
}
//http://localhost:4000/order/deleteOrder/2
exports.delete = (req, res) => {
    Myorder.deleteOne(req.params.orderID, function (err, result) {
        if (err) {
            return next(err)
        }
        res.send("Recored is deleted")
    })
}
//
exports.update = (req, res) => {
    Myorder.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (result) {
        Myorder.findOne({ _id: req.params.id }).then(function (result) {
            res.send(result);
        })
    })
}

