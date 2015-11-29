"use strict";

var operationNames = ["conjunction", "disjunction", "implication", "exclusive", "equivalence"];

function return10(bool) {
    return (bool) ? 1 : 0;
}

function boolean(x, y, operation){
    if (operation === operationNames[0]) {
        return return10(x && y);
    }
    if (operation === operationNames[1]) {
        return return10(x || y);
    }
    if (operation === operationNames[2]) {
        if (x) return y;
        else return 1;
    }
    if (operation === operationNames[3]) {
        return return10(!x != !y);
    }
    if (operation === operationNames[4]) {
        return return10(x === y);
    }
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(boolean(1, 0, "conjunction"), 0, "and");
    assert.equal(boolean(1, 0, "disjunction"), 1, "or");
    assert.equal(boolean(1, 1, "implication"), 1, "material");
    assert.equal(boolean(0, 1, "exclusive"), 1, "xor");
    assert.equal(boolean(0, 1, "equivalence"), 0, "same?");
    console.log("Now that you're finished, hit the 'Check' button to review your code and earn sweet rewards!");
}
