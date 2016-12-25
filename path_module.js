var path = require('path');

/*

used for transformation and handling of file paths.

*/

// 1.) NORMALIZATION
console.log('normalization: ' + path.normalize('usr/test//slashes/..'));
// result:    "usr/test" - removes doubles and understands the dots

// 2.) JOINING
console.log('join paths: ' + path.join('/usr', 'test', 'slashes/slash', '/programs', '..'));
// result: "/usr/test/slashes/slash" - combines, also understands the dots

// 3.) RESOLVE

console.log('resolution: ' + path.resolve('file.js'));
// result: "/home/vincent/projects/node_utitlity_modules/file.js" - current file path

// 4.) EXTENSION NAME
console.log('extension name: ' + path.extname('main.js'));
// result: ".js" -- gets you the file type
