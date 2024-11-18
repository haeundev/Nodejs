
// Importing the EventEmitter class from events module.
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called');
  });

// Raise an event
emitter.emit('messageLogged');