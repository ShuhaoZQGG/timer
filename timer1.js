let args = process.argv;
args = args.slice(2);
const timer = function(args) {
  for (const el of args) {
    if (Number(el) >= 0) {
      setTimeout(() => process.stdout.write('\x07'), el * 2000);
    }
  }
};

timer(args);