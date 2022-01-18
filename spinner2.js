let spinner = '|\/-\\';
let iniTime = 100;
let times = 3
for (let i = 0; i < times; i++) {
  for (let j = 0; j < spinner.length; j++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinner[j]}`)
    }, iniTime += 200)
  }
};