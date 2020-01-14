const stdin = process.stdin;


stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    console.log("*****Process ended*****");
    process.exit(); 
  }
  if (key <= 9 && key >= 1) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

});