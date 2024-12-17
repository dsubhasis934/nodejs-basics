const mongoose=require('mongoose');
const dbURL=process.env.MONGODB

const connectToDb=async()=>{
    try {
      const isDatabaseConnected= await mongoose.connect(dbURL);
      if(isDatabaseConnected){
        console.log('Connected to MongoDB')
      }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports=connectToDb