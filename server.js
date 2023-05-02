var express = require('express');
var socketIO = require('socket.io');

var expressApp = express();

var staticPath = __dirname + '/static';
expressApp.use(express.static(staticPath));

var server = expressApp.listen(3000, function () {
  console.log('App is listening on http://localhost:3000');
});

var io = socketIO(server);

io.on('connection', function (socket) {
  socket.emit('welcome');

  socket.on('new-text', function (data) {
    io.emit('got-message', data);
  })
});