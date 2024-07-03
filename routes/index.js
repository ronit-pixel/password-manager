var express = require('express');
var router = express.Router(); 
const app=express();
const userModal=require("./users")
const postModel=require("./post")
const PORT=3100


app.listen(PORT,()=>{
  console.log(`app is listtening on ${PORT}`)
})
/* GET home page. */
router.get('/', function(req, res, next) {
 res.send("hello ");
});
router.get('/createuser', async function(req, res, next) {
  let creteUser=await userModal.create({
    username:"priankus",
    password:"priankus@1",
    posts:[],
    email:"priankus1233@gmail.com",
    fullname:"priankus kumar",
  })
  res.send(creteUser)
});


module.exports = router;
