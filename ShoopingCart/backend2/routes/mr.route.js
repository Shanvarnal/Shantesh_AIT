const express=require("express");
const router=express.Router();
const mr_controller=require("../controller/mr.controller");

router.get("/test",mr_controller.test);

router.post("/create",mr_controller.create);
router.get("/all",mr_controller.all);

router.get("/:id",mr_controller.details);

router.delete("/deleteMr/:id",mr_controller.delete)

router.put("/update/:id",mr_controller.update)

module.exports=router;