function series(tasks, callback) {
    // your code
}

console.time('Series');
series([
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
            cb(null, 200);
        }, 200);
    }, (cb) => {
        setTimeout(() => {
            cb(null, 500);
        }, 500);
    }
], (err, result) => {
    console.log(result); // [100, 50, 200, 500]
    console.timeEnd('Series'); // ~ 100 + 50 + 200 + 500 = 850ms
});