const Auth=require('../Controllers/Auth')
const passport=require('passport')
const admin=require('../Controllers/admin_controller')
const router=require('express').Router();
router.get('/admin/greeter',passport.authenticate('jwt',{session:false}),Auth.checkrole(["Admin"]),admin.greeter)
module.exports=router;