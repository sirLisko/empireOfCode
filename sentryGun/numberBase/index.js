"use strict";

function convert(strNumber, radix) {
    return (strNumber.split("").some(function(c){
        return isNaN(parseInt(c, radix));
    })) ? -1 : parseInt(strNumber, radix);
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(convert("AF", 16), 175, "Hex");
    assert.equal(convert("101", 2), 5, "Bin");
    assert.equal(convert("101", 5), 26, "5 base");
    assert.equal(convert("Z", 36), 35, "Z base");
    assert.equal(convert("5A6E", 10), -1, "Z base");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
