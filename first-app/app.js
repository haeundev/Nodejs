
const fs = require('fs');

// however, try not to use this method as it is blocking and can slow down the app
const files = fs.readdirSync('./'); 
console.log(files);

// this is the non-blocking, async way
fs.readdir('./', (err, files) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Files:', files);
  }
});