const fs=require("fs");

fs.mkdir("./MakeFolder",(err)=>{
    if(err)
    {
        console.log("error: ",err);
    }
    console.log("Folder Created..")
})