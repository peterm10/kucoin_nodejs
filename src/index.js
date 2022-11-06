const { log } = require("console");
var http = require("http");
var API = require("kucoin-node-api");
//create a server object:

const config = {
  apiKey: "6181e687cc8d5b0001b1721e",
  secretKey: "430f290d-d018-4ab7-a818-c660199c9688",
  passphrase: "nplcryptolink",
  environment: "live"
};

/*
const config = {
  apiKey: "6181f7dfbc85c200065b62a5",
  secretKey: "f3dcf9e1-d5bd-44d5-80b2-e5bae0e2eb27",
  passphrase: "nplcryptolink",
  environment: "sandbox"
};
*/
API.init(config);
console.log("Initialized");
/*API.getAccounts().then((r) => {
  console.log(r.data);
});*/
/*
API.getFiatPrice({ base: "USD", currencies: ["XPR"] }).then((r) => {
  console.log(r.data);
});
*/
/*
API.getDepositList().then((r) => {
  console.log(r.data);
});
*/
/*
API.initSocket({ topic: "balances" }, (msg) => {
  let data = JSON.parse(msg);
  console.log(data);
});
*/

API.getWithdrawalQuotas({
  currency: "BTC"
}).then((r) => {
  console.log(`BTC: ${r.data}`);
});

API.initSocket({ topic: "symbolSnapshot", symbols: ["BTC-USDT"] }, (msg) => {
  let data = JSON.parse(msg);
  if (data.data) {
    console.log(`Data = ${data.data.data.buy}`);
  }

  //console.log(data);
});
/* 
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/
