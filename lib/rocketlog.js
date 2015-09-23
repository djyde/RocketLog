var io = require('socket.io-client');
var RocketLog = io('http://localhost:2333');


RocketLog.on('connect', function(){
  console.log('RocketLog connected!');
  
  var windowConsole = window.console;
  var rocketConsole = {};

  rocketConsole.log = function(data){
    windowConsole.log(data);
    RocketLog.emit('rocket', data);
  }

  window.console = rocketConsole;
})

RocketLog.on('connect_error', function(){
  console.log('Unable to connect RocketLog!');
  RocketLog.disconnect();
})
