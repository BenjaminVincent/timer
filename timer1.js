const input = process.argv.slice(2);

//console.log(input);
let timer = 0;


for (const i of input) {
  if (i >= 0 && !isNaN(i)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer += i * 1000);
  } 
}