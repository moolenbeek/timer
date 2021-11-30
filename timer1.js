var args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * i);
    }
  }