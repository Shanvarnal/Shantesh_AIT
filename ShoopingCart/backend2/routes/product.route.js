const express=require("express");
const router=express.Router();
const product_controller=require("../controller/product.controller");

router.get("/test",product_controller.test);

router.post("/create",product_controller.create);

router.get("/all",product_controller.all);

router.get("/:id",product_controller.details);

router.delete("/deleteProduct/:id",product_controller.delete)

router.put("/update",product_controller.update)


module.exports=router;