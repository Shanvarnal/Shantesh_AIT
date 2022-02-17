const fs=require("fs");

console.log("File delete Started.");

fs.unlinkSync("MyFile copy.txt",(err)=>{

    if(err)
    {
        console.log("err",err)
    }
    console.log("file deleted..")
});

console.log("File delete Ended");