const jwt = require('jsonwebtoken')
const secret_key=process.env.secret_key;
//
module.exports.genrate_token=async(data)=>{
   return await jwt.sign({data},secret_key,{expiresIn:'50000s'});
}

//Check Role
module.exports.checkrole=(roles=>{
    return (req,res,next)=>{
        if(roles.includes(req.user.Role)){
           next();
        }
        else{
            res.send("Not Authorized!")
        }

    }
})
