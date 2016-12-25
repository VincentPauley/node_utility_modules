var os = require('os');

/*

OS (Operating System Module)
----------------------------

provides several utilities that can reveal attributes about the OS running on the system.  Various examples include:

*/

console.log('endianness: ' + os.endianness());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('total sys memory: ' + os.totalmem() + ' bytes');
console.log('availale memory: ' + os.freemem() + ' bytes');
