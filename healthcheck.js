#!/usr/bin/env node

var http = require("http");
var logger = require("../app/utils/logger")(require('file-name')(__filename));

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
    logger.info(`HEALTHCHECK SUCCESS: Status code ${res.statusCode} - ${res.body}`);
    process.exit(0);
  } else {
    logger.error(`HEALTHCHECK ERROR: Status code ${res.statusCode} - ${res.body}`);
    process.exit(1);
  }
});

request.on('error', function(err) {  
  logger.error(`HEALTHCHECK ERROR: ${err.message}`);
  process.exit(1);
});

request.end();  