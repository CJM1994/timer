const timer = function (...args) {
  for (const arg of args) {
    if (arg > 0) {
      setTimeout(() => {
        process.stdout.write('BEEP' + '\n');
      }, arg * 1000)
    }
  }
}

timer(1, 2, undefined, 5, 'g', 10);
