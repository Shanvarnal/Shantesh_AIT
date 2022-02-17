const fs=require("fs");

fs.access("122.js",(err)=>{
    if(err)
    {
        console.log("File is not present");
    }
    else
    {
        console.log("File is present");
    }
})