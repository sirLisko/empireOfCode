"use strict";

function median(data) {
    var values = Array.prototype.slice.call(data);
    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length/2);

    if(values.length % 2) {
        return values[half];
    } else {
        return (values[half-1] + values[half]) / 2.0;
    }
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(median([1, 2, 3, 4, 5]), 3, "Sorted list");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "Not sorted list");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "It's not an average");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "Even length");
    assert.equal(median(list(range(1000000))), 499999.5, "Long.");
    console.log("All set? Click 'Check' to review your code and earn rewards!");
}
