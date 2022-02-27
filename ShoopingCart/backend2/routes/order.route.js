const express=require("express");
const router=express.Router();
const order_controller=require("../controller/order.controller");

router.get("/test",order_controller.test);

router.post("/create",order_controller.create);
router.get("/all",order_controller.all);

router.get("/:id",order_controller.details);

router.delete("/deleteMr/:id",order_controller.delete)

router.put("/update/:id",order_controller.update)

module.exports=router;