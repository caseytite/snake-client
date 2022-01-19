const net = require("net");
const { ID, PORT, messages } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ID,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //on connection
  conn.on("connect", () => {
    conn.write("Name: cjt");
    conn.write(`Say: run!`);
    // conn.write("Move: up");

    console.log("You are connected");
  });

  //data recieved
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  //on close
  conn.on("close", () => {
    console.log("You have logged out");
  });

  return conn;
};

module.exports = {
  connect,
};
