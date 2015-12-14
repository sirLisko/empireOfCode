"use strict";

function letterQueue(commands) {
    return commands.reduce(function(queue, command) {
        if (command.indexOf("PUSH") !== -1) {
            queue.push(command.split(" ")[1]);
        }
        else {
            queue.shift();
        }
        return queue;
    }, []).join("");
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]), "DOT", "dot example");
    assert.equal(letterQueue(["POP", "POP"]), "", "Pop, Pop, empty");
    assert.equal(letterQueue(["PUSH H", "PUSH I"]), "HI", "Hi!");
    assert.equal(letterQueue([]), "", "Nothing");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}

