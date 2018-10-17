var express = require('express');
var path = require('path');
var http = require('http');
var cors = require('cors');
var favicon = require('serve-favicon');

var app = express();
 app.use(cors());
//  const port=3000;
 var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
 };

 let fullPath = '/dist/'

 app.use(express.static(path.join(__dirname,fullPath)));


 app.get('/*', function(req, res){
   res.sendFile(path.join(__dirname,fullPath,'index.html'));
 });

const server =http.createServer(app);
server.listen(process.env.PORT || 50001)


module.exports = app;
