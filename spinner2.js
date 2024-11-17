const spinnerItems = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
const spinnerTimers = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700]

const spinner = function(spinnerItems, spinnerTimers) {
  spinnerItems.forEach((item, timer) => {
    setTimeout(() => {
      process.stdout.write(`\r${item}   `);

      // add a line break after the last item
      if (timer === spinnerItems.length - 1) {
        process.stdout.write('\n');
      }
    }, spinnerTimers[timer]);
  })
};

// calls the function
spinner(spinnerItems, spinnerTimers)
