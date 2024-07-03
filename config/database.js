const mongoose=require('mongoose');

const dbConnection=()=>{
    mongoose.connect('mongodb://localhost:27017/Project10')
    .then(()=>{console.log('Db connection successfull')})
    .catch((error)=>{
        console.log('error in Db Connection');
        console.log(error);
    })
}

module.exports=dbConnection;