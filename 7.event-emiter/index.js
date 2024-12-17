// If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

// On the backend side, Node.js offers us the option to build a similar system using the events module.

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("event", (data1,data2) => {
  console.log(`an ${data1} occurred and ${data2} disappear`);
});

eventEmitter.emit("event","villain","hero");    //so for call this event we need pass it name first then pass the parameters
