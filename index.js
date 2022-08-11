const colors = require("colors");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("введите число? ", (answer) => {
  start(answer);
  rl.close();
});

let start = (answer) => {
  let n = answer;
  let arr = [];
  nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    arr.push(i);
  }
  let a = 0;
  let b = 3;
  for (i = 0; i < Math.ceil(arr.length / 3); i++) {
    let arrs = arr.slice(a, b);
    for (j = 0; j < arrs.length; j++) {
      if (j == 0) {
        console.log(colors.green(arrs[j]));
      }
      if (j == 1) {
        console.log(colors.yellow(arrs[j]));
      }
      if (j == 2) {
        console.log(colors.red(arrs[j]));
      }
    }
    a = a + 3;
    b = b + 3;
  }
};
