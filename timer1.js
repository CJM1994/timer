const timer = function (...args) { // Rest parameters allow more than 1 argument (makes array)
  for (const arg of args) {
    if (arg > 0 && typeof arg !== 'string') {
      setTimeout(() => {
        process.stdout.write('BEEP' + '\n');
      }, arg * 1000)
    }
  }
}

timer(1, 2, undefined, 5, 'g', 10, '3');
