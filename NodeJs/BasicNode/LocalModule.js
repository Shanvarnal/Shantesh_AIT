const localModule={
    info:(info)=>{
        console.log(`info display --> ${info}`)
    },
    success:(para)=>{
        console.log(`success display --> ${para}`)
    },
    warning:(para)=>{
        console.log(`warning display --> ${para}`)
    },
    error:(para)=>{
        console.log(`error display --> ${para}`)
    }

}

module.exports=localModule;