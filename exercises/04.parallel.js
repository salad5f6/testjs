function looseParallel(tasks, callback) {
  // your code
}
console.time('looseParallel');
looseParallel([
  (cb) => {
    setTimeout(() => {
      cb(null, 100);
    }, 100);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 50);
    }, 50);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 500);
    }, 500);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 200);
    }, 200);
  }
], (err, result) => {
  console.log(result); // [50, 100, 200, 500] The ordering of the result is based on the consuming time of the task
  console.timeEnd('looseParallel'); // ~500ms
});

// ------------------------------------------------------------- //

function parallel(tasks, callback) {
  // your code
}
console.time('Parallel');
parallel([
  (cb) => {
    setTimeout(() => {
      cb(null, 100);
    }, 100);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 50);
    }, 50);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 500);
    }, 500);
  }, (cb) => {
    setTimeout(() => {
      cb(null, 200);
    }, 200);
  }
], (err, result) => {
  console.log(result); // [100, 50, 500, 200] the ordering of the result is as same as the tasks input
  console.timeEnd('Parallel'); // ~500ms
});