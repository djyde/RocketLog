import io from 'socket.io-client'
const RocketLog = io('http://localhost:2333');

let connected = false

RocketLog.on('connect', function(){  

  connected = true
  RocketLog.emit('rocket', {
    type: 'log',
    msg: 'Client connected'
  })

  Rocket.log('Rocket cliet connect!')
})

RocketLog.on('connect_error', function(){
  console.warn('Unable to connect RocketLog!');
  RocketLog.disconnect();
})

let channel = 'rocket'

let Rocket = {
  log(msg){
    console.log(msg)
    if (connected) {
      RocketLog.emit(channel, {
        type: 'log',
        msg
      })
    };
  },

  warn(msg){
    console.warn(msg)
    if (connected) {
      RocketLog.emit(channel, {
        type: 'warn',
        msg
      })
    } 
  },

  error(msg){
    console.error(msg)
    if (connected) {
      RocketLog.emit(channel, {
        type: 'error',
        msg
      })
    }
  },

  info(msg){
    console.error(msg)
    if (connected) {
      RocketLog.emit(channel, {
        type: 'info',
        msg
      })
    }
  }
}

module.exports = Rocket