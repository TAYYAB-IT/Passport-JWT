const passport = require('passport');
const Auth=require('../Controllers/Auth')
const user=require('../Controllers/user_controller');
const router=require('express').Router();
router.post('/signup',user.signup);
router.post('/signin',user.signin);
router.get('/user/greeter',passport.authenticate('jwt',{session:false}),Auth.checkrole(["User","Admin","Employee"]),user.greeter)
module.exports=router;