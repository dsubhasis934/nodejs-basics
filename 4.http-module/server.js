const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("req",req)
    res.writeHead(200,{"Content-Type":"text/plane"})
    res.end("hello from http module")  //it listen on localhost:5000
})

const port=5000;

server.listen(port,()=>{
    console.log(`server is running on port ${port}`) //so we need to listen the server
})