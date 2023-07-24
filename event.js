var event=require('events');
var eventEmitter=new event.EventEmitter();

// Define a callback function
var myEventHandler=function(){
    console.log('Hello World !!');
};

// Assign event to the eventHandler
eventEmitter.on('world',myEventHandler);

// Fire the event
eventEmitter.emit('world');