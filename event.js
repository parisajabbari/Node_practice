const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message logged", function (arg) {
  console.log("listener logged", arg);
});

emitter.emit("message logged", { id: 1, url: "http:// /test.io" });
