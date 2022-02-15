const timer = function (...args) {

  for (const arg of args) {

    setTimeout(() => {
      process.stdout.write('BEEP' + '\n');
    }, arg * 1000)

  }

}

timer(1, 10, 5, 7);

// Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments