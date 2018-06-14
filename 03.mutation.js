const arr = [];
let foo = { a: 1 };
let bar = { b: 2 };

arr.push(foo);
arr.push(bar);
foo.a = foo = bar = { c: 3 };
bar.b = bar = foo = { d: 4 };
arr.push(foo);
arr.push(bar);
foo = null;

// What does the following code print?
console.log(arr[0] === arr[2]);
console.log(arr[1] === arr[3]);
console.log(arr[2] === null);
console.log(arr[3] === arr[2]);