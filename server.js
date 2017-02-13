const express = require('express');
const app = express();

// configure a public directory to host static content
app.use(express.static(`${__dirname}/public`));

const ipaddress = '127.0.0.1';
const port      = 5656;

app.listen(port, ipaddress);
console.log(`LocalHost Running at port: ${port}`);
