const Auth=require('../Controllers/Auth')
const passport=require('passport')
const emp=require('../Controllers/emp_controller')
const router=require('express').Router();
router.get('/emp/greeter',passport.authenticate('jwt',{session:false}),Auth.checkrole(["Employee"]),emp.greeter)
module.exports=router;