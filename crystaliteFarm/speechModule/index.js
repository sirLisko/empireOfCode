"use strict";

var tellNumber = function toWords(n) {
    var minus = "";
    if ( n === 0) {
        return "zero";
    }
    if ( n < 0 ) {
        minus = "minus ";
        n = Math.abs(n);
    }

    var a = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var b = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var g = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion"];
    var grp = function grp(n) {
        return ("000" + n).substr(-3);
    };
    var rem = function rem(n) {
        return n.substr(0, n.length - 3);
    };
    var fmt = function fmt(_ref) {
        var h = _ref[0];
        var t = _ref[1];
        var o = _ref[2];

        return [Number(h) === 0 ? "" : a[h] + " hundred ", Number(o) === 0 ? b[t] : b[t] && b[t] + " " || "", a[t + o] || a[o]].join("");
    };
    var cons = function cons(xs) {
        return function (x) {
            return function (g) {
                return x ? [x, g && " " + g || "", " ", xs].join("") : xs;
            };
        };
    };
    var iter = function iter(str) {
        return function (i) {
            return function (x) {
                return function (r) {
                    if (x === "000" && r.length === 0) return str;
                    return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
                };
            };
        };
    };

    return minus + iter("")(0)(grp(String(n)))(rem(String(n))).trim();
};

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    // Rank 1
    assert.equal(tellNumber(4), "four", "1st example" );
    assert.equal(tellNumber(133), "one hundred thirty three", "2nd example");
    assert.equal(tellNumber(12), "twelve", "3rd example");
    assert.equal(tellNumber(101), "one hundred one", "4th example");
    assert.equal(tellNumber(212), "two hundred twelve", "5th example");
    assert.equal(tellNumber(40), "forty", "6th example");

    // Rank 2
    assert.equal(tellNumber(-133), "minus one hundred thirty three", "Minus");
    assert.equal(tellNumber(0), "zero", "Zero");

    // Rank 3)
    assert.equal(tellNumber(42000),"forty two thousand", "42 many");
    assert.equal(tellNumber(-999999),
            "minus nine hundred ninety nine thousand nine hundred ninety nine", "Abyss");
    console.log("Code's finished? Earn rewards by clicking 'Check' to review your tests!");
}


