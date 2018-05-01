#!/usr/bin/env node

var http = require("http");

var options = {  
  host: "localhost",
  port: "4047",
  timeout: 1000,
  headers: {
    "User-Agent": "DOCKER HEALTHCHECK"
  }
};

var request = http.request(options, (res) => {  
  if (res.statusCode == 200) {
    console.log(`HEALTHCHECK SUCCESS: Status code ${res.statusCode} - ${res.body}`);
    process.exit(0);
  } else {
    console.error(`HEALTHCHECK ERROR: Status code ${res.statusCode} - ${res.body}`);
    process.exit(1);
  }
});

request.on('error', function(err) {  
  console.error(`HEALTHCHECK ERROR: ${err.message}`);
  process.exit(1);
});

request.end();  