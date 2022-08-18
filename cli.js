const fs = require('fs');
const readline = require('readline');
const path = require('path');
const inquirer = require('inquirer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = async (query) =>
  new Promise((resolve, reject) => rl.question(query, resolve));

(async () => {
  const filePath = await question('Введите путь до файла: ');
  const encode = await question('Введите кодировка файла: ');
 fs.readFile(path.join(__dirname, filePath), encode, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);

  });
 const find = await question('что хотите найти? ');
 readline.createInterface({
    input: fs.createReadStream(filePath),
    terminal: false
}).on('line', function(line) {
  if (line.startsWith(find)){
console.log(line);
  }
})

  rl.close();
})();

