const EventEmitter = require("events");

//instance of our class event emmitter class
const customEmitter = new EventEmitter();

//subscribing to the event with a callback function- event listener
customEmitter.on("event", (data) => {
  console.log(data); //here event data is data we want to emit
});

//emitting an event we listened ro subscribed to
customEmitter.emit("event", "hello world");

//it doesn'yt makes sense to listen to an event you have already emitted
