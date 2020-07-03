const EventEmmiter = require("events");

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (args) => {
  console.log("Listener called", args);
});

logger.log("message");
