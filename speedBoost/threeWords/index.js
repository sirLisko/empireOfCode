"use strict";

function threeWords(words) {
    return (words.match(/[a-z]+\s[a-z]+\s[a-z]+/gi)) ? true : false;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(threeWords("Hello World hello"), true, "Hello");
    assert.equal(threeWords("He is 123 man"), false, "123 man");
    assert.equal(threeWords("1 2 3 4"), false, "Digits");
    assert.equal(threeWords("bla bla bla bla"), true, "Bla Bla");
    assert.equal(threeWords("Hi"), false, "Hi");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
