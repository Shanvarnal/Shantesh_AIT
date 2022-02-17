const fs=require("fs");

const input="This text is appending from appending file code. ";
console.log("file appending started");

fs.appendFile("write.txt",input,(err)=>{

    if(err)
    {
        console.log(err);
    }
    console.log("appended succesFuuly..!");
});

console.log("file appending ended");