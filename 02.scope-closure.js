// 01: What is the outcome of the two alerts below?

var foo = "Hello ";
var bar = "Universe";
(function () {
    alert(foo + bar);
    var bar = "World";
})();
alert(foo + bar);


// ------------------------------------------------ //
const planes = ['VNA001', 'VJ001', 'VNA002'];

const depart = function (plane) {
    console.log(`${plane} took off`);
}

for (var i = 0; i < planes.length; i++) {
    setTimeout(() => {
        depart(planes[i]);
    }, 1000 * i);
}

// 02. What's going to be printed?
// 03. Change the code so the logs will be:
        // VNA001 took off
        // VJ001 took off
        // VNA002 took off