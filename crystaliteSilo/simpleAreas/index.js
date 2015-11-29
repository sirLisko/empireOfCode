"use strict";

function simpleAreas() {
    if (arguments.length === 1) {
        return ((arguments[0]/2) * (arguments[0]/2) * Math.PI).toFixed(2)/1;
    } else if (arguments.length ===2) {
        return (arguments[0] * arguments[1]).toFixed(2)/1;
    } else if (arguments.length === 3) {
        var perimeter = (arguments[0] + arguments[1] + arguments[2])/2;
        return (Math.sqrt(perimeter*((perimeter-arguments[0])*(perimeter-arguments[1])*(perimeter-arguments[2])))).toFixed(2)/1;
    }
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function(actual, expected, significantDigits){
        significantDigits = significantDigits || 2;
        var precision =  Math.pow(0.1, significantDigits);
        return Math.abs(expected - actual) < precision;
    };

    assert(almostEqual(simpleAreas(3), 7.07), "Circle");
    assert(almostEqual(simpleAreas(2, 2), 4), "Square");
    assert(almostEqual(simpleAreas(2, 3), 6), "Rectangle");
    assert(almostEqual(simpleAreas(3, 5, 4), 6), "Triangle");
    assert(almostEqual(simpleAreas(1.5, 2.5, 2), 1.5), "Small triangle");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
