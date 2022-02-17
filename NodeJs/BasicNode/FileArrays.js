const fs=require('fs');
try{
const arrayOfFiles=fs.readdirSync("../BasicNode" ,(err)=>{
    if(err)
    {
        console.log( "error:-",err);

    }
   
});
console.log(arrayOfFiles);
}
catch(e)
{
    console.log("exceptions",e);
}