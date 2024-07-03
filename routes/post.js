const mongoose=require("mongoose")


const postSchema=mongoose.Schema({
    postText:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Number,
        default:[]
    }
})

const Post=mongoose.model('Post',postSchema)
module.exports=Post