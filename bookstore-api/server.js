require('dotenv').config() //it always define first of the project
const express=require('express')
const connectToDb=require('./database/db')
const bookRoutes=require('./routes/book-routes')

const app=express()
const port=process.env.PORT

//connect to our database
connectToDb()

//use middleware
app.use(express.json()) //for parse json files

//define routes

app.use('/api/books',bookRoutes)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})