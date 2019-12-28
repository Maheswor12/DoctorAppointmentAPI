"use strict";
const http = require('http');
const index = require('./index');
const port = process.env.PORT || 3015;
const server = http.createServer(index);
server.listen(port);
