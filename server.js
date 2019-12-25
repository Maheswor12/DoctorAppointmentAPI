"use strict";
const http = require('http');
const index = require('./index');
const port = process.env.PORT || 3011;
const server = http.createServer(index);
server.listen(port);
