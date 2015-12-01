"use strict";

var _ = require('underscore');

function verifyAnagrams(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase().replace(/\s/g, '').split('');
    secondWord = secondWord.toLowerCase().replace(/\s/g, '').split('');
    
    return _.isEqual(firstWord.sort(), secondWord.sort());
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(verifyAnagrams("Programming", "Gram Ring Mop"), true, "Gram of code");
    assert.equal(verifyAnagrams("Hello", "Ole Oh"), false, "Hello! Ole Oh!");
    assert.equal(verifyAnagrams("Kyoto", "Tokyo"), true, "The global warming crisis of 3002");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
