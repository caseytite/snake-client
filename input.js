let connection;
const net = require("net");
// need to use stdin
const { stdin } = require("process");

const handleUserInput = function () {
  //terminates game
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
  });
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};
