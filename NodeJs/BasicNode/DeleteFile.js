const fs=require("fs");

console.log("File delete Started.");

fs.unlink("MyFile Copy.txt",(err)=>{
    if(err)
    {
        console.log("err",err);
    }
    console.log("file deleted")
});

console.log("File delete Ended");