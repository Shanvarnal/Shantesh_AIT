const fs=require("fs");
const input="This is writing file txt documents which we are passing as a input param";

console.log("file write started");

//writeFile has three param one filename,input(text values need to write in file),function(which only one param as a error)
fs.writeFile("write.txt",input,(err)=>{

    if(err)
    {
        console.log("error:",err);
    }
    console.log("File Writed SuccessFully..!");
})

console.log("file write ended");