"use strict";

function clockAngle(time){
    var hrs = time.split(":")[0] % 12;
    var min = time.split(":")[1];

    var angle = Math.round(Math.abs(30 * [hrs - (min/5)] + (min/2))*10) / 10;

    return (angle <= 180) ? angle : 360 - angle ;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(clockAngle("02:30"), 105, "02:30");
    assert.equal(clockAngle("13:42"), 159, "13:42");
    assert.equal(clockAngle("01:42"), 159, "01:42");
    assert.equal(clockAngle("01:43"), 153.5, "01:43");
    assert.equal(clockAngle("00:00"), 0, "Zero");
    assert.equal(clockAngle("12:01"), 5.5, "Little later");
    assert.equal(clockAngle("18:00"), 180, "Opposite");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
