const stdin = process.stdin;
const stdout = process.stdout;
const exit = process.exit;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = function () {

  stdin.on('data', (key) => {

    if (key === 'b') {
      stdout.write('BEEP\n');
    }
    else if (!isNaN(key)) {
      console.log(`Setting timer for ${key} seconds...`);
      setTimeout(() => {
        console.log('BEEP');
      }, key * 1000)
    }

    if (key.charCodeAt(0) === 3) {
      exit();
    }

  })

}

timer();

// charCodeAt() is a good way to get the UTF-8 numbers for any key to use in code
// charCodeAt(key) gets you 3 for cntrl+c
// much easier than looking up tables or trying to remember special syntax for hex values