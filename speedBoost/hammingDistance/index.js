"use strict";

function checkHamming(n, m){
    var first = n.toString(2).split("").reverse();
    var second = m.toString(2).split("").reverse();

    return first.filter(function(el, i){
        return (second[i] && second[i] != el) || !second[i] && el === "1";
    }).length;
}


function hamming(n, m){
    return (n > m) ? checkHamming(n, m) : checkHamming(m,  n);
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(hamming(117, 17), 3, "First example");
    assert.equal(hamming(1, 2), 2, "Second example");
    assert.equal(hamming(16, 15), 5, "Third example");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
