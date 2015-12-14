"use strict";

var values = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
];

function roman(n) {
    var value = "";
    for (var idx = 0; n > 0 && idx < values.length; idx++) {
        while (n >= values[idx][1]) {
            value += values[idx][0];
            n -= values[idx][1];
        }
    }
    return value;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(roman(6), "VI", "6");
    assert.equal(roman(76), "LXXVI", "76");
    assert.equal(roman(499), "CDXCIX", "499");
    assert.equal(roman(3888), "MMMDCCCLXXXVIII", "3888");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
