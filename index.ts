const https = require("https");

const f = require("node-fetch"); // v2.6.12

const agent = new https.Agent({
  keepAlive: true,
  // Infinity is read as 50 sockets
  maxSockets: 5,
  timeout: 1,
});

const promises = [];
for (let i = 0; i < 6; i++) {
  promises.push(f("https://anglesharp.azurewebsites.net/Chunked", { agent }));
}

Promise.all(promises).then((x) => console.log(x.length));
