"use strict";

function countInversion(sequence) {
    var count = 0;

    for (var i = 0; i < sequence.length; i++) {
        for (var j = i + 1; j < sequence.length; j++) {
           if (sequence[i] > sequence[j]) {
                count++;
           }
        }
    }

    return count;
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