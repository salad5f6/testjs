function curry(fn) {
    // your code
}

function addFn(a, b, c) {
    return a + b + c;
}

const add = curry(addFn);

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)(3)); // 6
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2)(3, 4)); // 6