const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message logged", (arg) => {
  console.log("listener logged", arg);
});

emitter.emit("message logged", { message: "MESSAGE" });
