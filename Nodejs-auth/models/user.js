const mongoose=require('mongoose')

const {Schema}=mongoose

const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','user'], //only allow user or admin roles
        default:'user'
    }
},{timestamps:true})

module.exports=mongoose.model("user",userSchema)