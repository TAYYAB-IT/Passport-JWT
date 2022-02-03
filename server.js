const express = require('express')
const passport=require('passport')
const mongoo=require('./MIddlewares/DB_connection')
require('dotenv').config();
const app = express()
app.use(express.json())
require('./MIddlewares/passport');
passport.initialize();
mongoo(process.env.db_url).then(()=>{

const admin=require('./Routes/admin_routes')
const emp=require('./Routes/emp_routes')
const user=require('./Routes/user_routes')
app.use('/',admin);
app.use('/',emp)
app.use('/',user)


})
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000.")
})