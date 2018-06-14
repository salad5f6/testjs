// What does the following code print?

function exec() {
    console.log('Begin');
    // Assume this function always takes at least 5000ms to finish
    let num = 0;
    for (let i = 0; i < 30e7; i++) {
        num += Math.random();
    }
    console.log('Done');
}

setTimeout(() => {
    console.log('One')
}, 0);

setTimeout(() => {
    console.log('Two')
}, 1000);

exec();