const express=require("express");
const router=express.Router();
const login_controller=require("../controller/login.controller");

router.get("/test",login_controller.test);

router.post("/create",login_controller.create);


module.exports=router;