"use strict";

function solveAngle(a, b, c) {
    var temp = (a * a + b * b - c * c) / (2 * a * b);
    if (-1 <= temp && temp <= 0.9999999) {
        return Math.round(Math.acos(temp) / Math.PI * 180);
    } else {
        return 0;
    }
}

function angles(a, b, c){
    var angles = [
        solveAngle(a, b, c),
        solveAngle(b, c, a),
        solveAngle(a, c, b)
    ];

    if (angles[0] && angles[1] && angles[2]) {
        return angles.sort(function(a, b){
            return a - b;
        });
    } else {
        return [0, 0 ,0];
    }
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.deepEqual(angles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(angles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(angles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
