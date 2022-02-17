const fs=require("fs");

console.log("File read start");
//readfile only two parm one is filename and second is function with error and data param
fs.readFile("MyFile.txt",(err,data)=>{
if(err)
{
    console.log("error:-",err);
}
else{
    console.log(data.toString());
}
});

console.log("File read ended");