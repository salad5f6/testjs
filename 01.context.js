function Person(name) {
    this.name = name;
    this.greeting = function () {
        return `Hi. I'm ${this.name}`;
    }
    this.asyncGreeting = function (callback) {
        setTimeout(function () {
            callback(this.greeting());
        }, 1000);
    }
}

function sayGreeting(greeting) {
    console.log(greeting());
}

const peter = new Person('Peter');

// 01. What does the following code print?
sayGreeting(peter.greeting);
// 02. What's going to happen? How to fix that?
peter.asyncGreeting(console.log);