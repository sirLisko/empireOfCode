"use strict";

function countInversion(sequence, result) {
    result = result || 0;
    var control = sequence.shift();

    var inverted = sequence.filter(function(num){
        return num < control;
    }).length;

    return (sequence.length) ? countInversion(sequence, result + inverted) : result;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
