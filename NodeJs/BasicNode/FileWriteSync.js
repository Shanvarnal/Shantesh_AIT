const fs=require("fs");

const data="This is writing Sync txt"

console.log("File Write Started");

fs.writeFileSync("writeSync.txt",data,(err)=>{
    if(err)
    {
        console.log(err);
    }

    console.log("FIle Writed SuccessFully.")
})

console.log("File Write Ended");
