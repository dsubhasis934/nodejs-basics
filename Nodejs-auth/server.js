require('dotenv').config()

const express=require('express')
const connectToDb=require('./database/db')

const app=express();
const port=process.env.PORT || 3000;
const authRoutes=require('./routes/auth-routes')
const homeRoutes=require('./routes/home-routes')


//middleware
app.use(express.json());

//routes
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)

connectToDb()
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
