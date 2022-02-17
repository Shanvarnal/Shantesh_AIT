const event=require("events");

var eventEmitter=new event.EventEmitter();

var myEvent=function()
{
    console.log('This is event called');
}

eventEmitter.on('test',myEvent);

eventEmitter.emit('test');

eventEmitter.on("secondEvent",()=>{
    console.log("Event Second Called");
})

eventEmitter.emit("secondEvent");