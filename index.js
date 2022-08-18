const fs = require("fs");
const colors = require("colors");
const readline = require("readline");
const { Transform } = require("stream");
// const writeStream = fs.createWriteStream('./access.log', { flags: 'a',encoding: 'utf8' });
// for(i=0;i<10;i++){
//   writeStream.write('\n');
//  writeStream.write(`${Math.floor(Math.random() * (999 - 100 + 1)) + 100}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)} - - [25/May/2021:00:07:17 +0000] "GET /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"`)  
// }

// writeStream.end(() => console.log('File writing finished'));
// запустьть для создания файла

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('введите Ip адрес? ', (answer) => {
  start(answer)
    rl.close();12
  });
let start=(answer)=>{
let filename = './access.log';
readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
}).on('line', function(line) {
  if (line.startsWith(answer)){
    fs.appendFile("test.log", line, function(error){
      if(error) throw error;                    
      console.log("Запись файла завершена. Содержимое файла:");
  });
  }
});rl.close()
}  