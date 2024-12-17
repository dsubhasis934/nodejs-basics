const mongoose=require('mongoose')
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://dsubhasis934:dsubhasis934@cluster0.aw7tl.mongodb.net/').then(()=>{console.log("database successfully connected")}).catch((err)=>{console.log("error occurred",err)})

const userSchema = new Schema({
   name:String,
   email:String,
   age:Number,
   isActive:Boolean,
   tags:[String],
   createdAt:{type:Date,default:Date.now} //it always take current date by default
  });


  const User = mongoose.model('User', userSchema);

  const createNewUser=async()=>{
   try {
      //create new user
      // --------------------------------------------

      // const newUser=await User.create({
      //    name:"demonicplayer",
      //    email:"demonicplayer@gmail.com",
      //    age:25,
      //    isActive:true,
      //    tags:["tag1","tag2"],
      // })
      // console.log("user has been created",newUser);

      //get user selected fields
      // ----------------------------------------

      // const userSelectedField=await User.find().select('name email'); //by select function we got only that specific fields
      // console.log("userSelectedField",userSelectedField)

      // for pagination
      // --------------------------------------------

      // const getLimitedUsers=await User.find().limit(1).skip(1); //so this function means we get only one data[cause limit(1)] and from second record [cause skip(1)]
      // console.log("getLimitedUsers",getLimitedUsers)

      //for sorting
      // ----------------------

      // const getSortedUser=await User.find().sort({age:-1}) //-1 means it give me descending order for ascending,we give 1

      // for count documents
      // --------------------------------------------
      // const getSortedUser=await User.countDocuments({isActive:true}) //it provides number of records which satisfy its filter condition



   } catch (error) {
      console.log("err",error)
   }finally{
      mongoose.connection.close()
   }
  }

  createNewUser()