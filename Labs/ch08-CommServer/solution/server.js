var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(9007);
console.log('Listening on port 9007');