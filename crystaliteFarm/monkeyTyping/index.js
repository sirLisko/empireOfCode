"use strict";

function countWords(text, words) {
    return words.filter(function(w){
        return text.toLowerCase().indexOf(w) !== -1;
    }).length;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]),
        3, "Example");
    assert.equal(countWords("Bananas, give me bananas!!!", ["banana", "bananas"]), 2, "BANANAS!");
    assert.equal(countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        ["sum", "hamlet", "infinity", "anything"]), 1, "Weird text");
    console.log("Code's finished? Earn rewards by clicking 'Check' to review your tests!");
}

