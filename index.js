const fs = require("fs");
const colors = require("colors");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { Transform } = require("stream");
const ACCESS_LOG = "./access.log";
const generateRundomIP = () => {
  const requests = [
    `${Math.floor(Math.random() * (999 - 100 + 1)) + 100}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)} - - [25/May/2021:00:07:17 +0000] "GET /foo HTTP/1.1" 200 0 "-" "curl/7.47.0"`,
  ];
  fs.appendFile(ACCESS_LOG, requests[0] + "\n", { encoding: "utf8" }, (err) => {
    if (err) console.log(err);
  });
};

// for (i=0;i<10000;i++){
//   generateRundomIP()
// }///запустить для генерации файла 1 мб

// const payedAccount = true;

// const readStream = fs.createReadStream(ACCESS_LOG);

// const tStream = new Transform({
//   transform(chunk, enconfig, callback) {
//     if (!payedAccount) {
//       const transformed = chunk
//         .toString()
//         .replace(/\d+\.\d+\.\d+\.\d+/g, "[Hidden IP]");
//       this.push(transformed);
//     } else {
//       this.push(chunk);
//     }

//     callback();
//   },
// });
// readStream.pipe(tStream).pipe(process.stdout);
const start=(answer)=>{
  fs.readFile(ACCESS_LOG, "utf8", 
  function(error,data){
      console.log(data);
      if(error) throw error; 
      console.log(data);  
});
}
rl.question("введите ip адес ", (answer) => {
  start(answer);
  rl.close();
});