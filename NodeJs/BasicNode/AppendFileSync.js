const fs=require("fs");

const data="This is append Sync txt. "

console.log("File append txt Started");

fs.appendFileSync("writeSync.txt",data,(err)=>{

    if(err)
    {
        console.log(err);
    }
    else{
        console.log("file appended SuccessFully.");
    }
    
});

console.log("File append txt Ended");

