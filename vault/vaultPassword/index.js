"use strict";

function golf(p) {
    return !!(p.match(/([0-9])/) && p.match(/([A-Z])/) && p.match(/([a-z])/) && p.length > 9);
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(golf("A1213pokl"), false, "Short");
    assert.equal(golf("bAse730onE"), true, "Nice");
    assert.equal(golf("asasasasasasasaas"), false, "Only lowers");
    assert.equal(golf("QWERTYqwerty"), false, "Numbers?");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
