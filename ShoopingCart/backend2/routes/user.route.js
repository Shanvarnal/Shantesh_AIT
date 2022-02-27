const express=require("express");
const router=express.Router();
const user_controller=require("../controller/user.controller");

router.get("/test",user_controller.test);

router.post("/create",user_controller.create);
router.get("/all",user_controller.all);

router.get("/:id",user_controller.details);

router.delete("/deleteUser/:id",user_controller.delete)

router.put("/update",user_controller.update)



module.exports=router;