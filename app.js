#!/usr/bin/env node

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('OK'));

function startServer() {
  app.listen(4047, () => console.log('Dummy app listening on port 4047!'));
}

// wait 7.5 seconds to start server
setTimeout(startServer, 7500);
