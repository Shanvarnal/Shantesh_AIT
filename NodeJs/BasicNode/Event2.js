
const events=require("events");

const eventEmitter=new events.EventEmitter();
 //  Console.log("Emit call started");

eventEmitter.on("SecondEmit",()=>{
    console.log("Second Emit call Started");
    eventEmitter.emit("FirstEmit");
    // Console.log("Second Emit call ended");
});

eventEmitter.on("FirstEmit",()=>{
    console.log("First Emit calling....")
});

eventEmitter.emit("SecondEmit");

  // Console.log("Emit call ended");