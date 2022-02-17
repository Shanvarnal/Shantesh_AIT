const expres=require("express");
const res = require("express/lib/response");

const app=expres();

const fs=require("fs");

app.get('/listEmp',function(req,res){
    fs.readFile("Emp.json",function(err,data){
        console.log("dataLoading",data.toString());
        res.end(data);
    });
});

app.get('/:id',(req,res)=>{
    fs.readFile("Emp.json",(err,data)=>{
      let empData=JSON.parse(data);
      let emp=empData["emp"+req.params.id];
      console.log("empDatas: ",emp);
      res.end(JSON.stringify(emp));
    });
});

const server=app.listen(4002,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Server is runing on http://%s:%s",host,port);
})