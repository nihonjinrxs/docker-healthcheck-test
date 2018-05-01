#!/usr/bin/env node

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(
  morgan(":method :url :status \":user-agent\" :res[content-length] - :response-time ms")
);

app.get('/', (req, res) => res.send('OK'));

process.on('SIGTERM', () => {
  console.log(`Received SIGTERM: gracefully closing server and terminating process.`);
  server.close(() => process.exit(0));
});

function startServer() {
  app.listen(4047, () => console.log('Dummy app listening on port 4047!'));
}

// wait 7.5 seconds to start server
setTimeout(startServer, 7500);
