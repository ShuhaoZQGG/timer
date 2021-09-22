/*
Implement a new timer which behaves in the following way:

The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
*/

const timer = function() {
  process.stdin.setRawMode(true);
  process.stdin.setEncoding('utf8');
  let numList = ['1','2','3','4','5','6','7','8','9'];
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else if (numList.includes(key)) {
      setTimeout(() => process.stdout.write('\x07'), (numList.indexOf(key) + 1) * 1000);
    } else if (key === 'b') {
      process.stdout.write('\x07');
    } else {
      process.stdout.write(key);
    }
  });
};

timer();