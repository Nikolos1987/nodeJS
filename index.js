const fs = require("fs");
const colors = require("colors");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { Transform } = require("stream");
const writeStream = fs.createWriteStream('./access.log', { flags: 'a',encoding: 'utf8' });


// for(i=0;i<100000;i++){
//   writeStream.write('\n');
//  writeStream.write(`${Math.floor(Math.random() * (999 - 100 + 1)) + 100}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)} - - [25/May/2021:00:07:17 +0000] "GET /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"`)  
// }

// writeStream.end(() => console.log('File writing finished'));
// запустьть для создания файла