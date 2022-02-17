console.log("Hello");
const http=require("http");
http.createServer((req,res)=>{
res.write("hello node ,agin aplay");
res.end();
}).listen(4000,()=>{
    console.log("Server Started");
})