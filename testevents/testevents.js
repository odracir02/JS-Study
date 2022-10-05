const event = require('events')
let eventEmiter=event.EventEmitter
let ee=new eventEmiter()

ee.on('data',date=>console.log(date))

setInterval(function(){
    ee.emit('data',Date.now());
}, 500);