const express=require("express");
const router=express.Router();
const cart_controller=require("../controller/cart.controller");

router.get("/test",cart_controller.test);

router.post("/create",cart_controller.create);
router.get("/all",cart_controller.all);

router.get("/:id",cart_controller.details);

router.delete("/deleteCart/:id",cart_controller.delete)

router.put("/update",cart_controller.update)

router.put("/updatecart",cart_controller.updatecart)

module.exports=router;