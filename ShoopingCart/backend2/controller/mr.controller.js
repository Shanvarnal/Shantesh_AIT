//const { nextTick } = require("process");
const Mymr = require("../model/mr.model");
//http://localhost:4000/mr/test
exports.test = (req, res) => res.send("I am tested");


//http://localhost:4000/mr/create
exports.create = (req, res) => {
    console.log("obj",req.body);
    let mr = new Mymr({
        mrNo: req.body.mrNo,
        mrDate: req.body.mrDate,
        suplierName: req.body.suplierName,
        productID: req.body.productID,
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        amount: req.body.amount

    });
    mr.save(function (err) {
        if (err) {
            console.log(err);
            return nextTick(err)
        }
       res.send({message:"MR Record is inserted"});
    //    res.json(req.body)
    });


}
//http://localhost:4000/mr/all
exports.all = (req, res) => {
    Mymr.find(function (err, result) {
        if (err) {
            return next(err);
        }
        res.send(result);
    });
}

//http://localhost:4000/mr/620f76c8499c7fe669622dfc
exports.details = (req, res) => {

    //var query={mr_id:req.params.mr_id}

    Mymr.findById(req.params.id, function (err, result) {
        if (err) {
            return next(err)
        }
        res.send(result);
    })
}
//http://localhost:4000/mr/deletemr/2
exports.delete = (req, res) => {
    Mymr.deleteOne(req.params.mrID, function (err, result) {
        if (err) {
            return next(err)
        }
        res.send("Recored is deleted")
    })
}
//
exports.update = (req, res) => {
    Mymr.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (result) {
        Mymr.findOne({ _id: req.params.id }).then(function (result) {
            res.send(result);
        })
    })
}

