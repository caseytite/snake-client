const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //on connection
  conn.on("connect", () => {
    conn.write("Name: cjt");

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
