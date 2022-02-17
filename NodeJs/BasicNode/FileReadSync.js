const fs=require("fs");

console.log("File read Started");

const data=fs.readFileSync("MyFile.txt");
console.log(data.toString());

console.log("File Read Ended");
