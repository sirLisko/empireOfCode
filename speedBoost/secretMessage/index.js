"use strict";

function findMessage(text){
    var filter = text.match(/[A-Z]/g);

    return (filter) ? filter.join('') : '';
}

var assert = require("assert");

if (!global.is_checking){
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Code's finished? Earn rewards by clicking 'Check' to review your tests!");
}
