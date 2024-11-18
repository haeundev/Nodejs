const EventEmitter = require('events'); // why do we need this? because we are using the EventEmitter class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { // extends is used to inherit from EventEmitter
  log(message) {
    console.log(message);
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}


module.exports = Logger; // exports the Logger class