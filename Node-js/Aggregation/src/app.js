const express = require('express');
const http = require('http');
const router = require('./routes/routes');
const path = require('path');
const app = express();


app.use(express.json());
app.use(router);

const fileStore = express.static(path.join(__dirname,"uploads"))
app.use("/files", fileStore);

const server = http.createServer(app);


module.exports = server;