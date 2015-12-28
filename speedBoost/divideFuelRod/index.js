"use strict";

function sum(x){
    return x.reduce(function(t,n){
        t = t+n;
        return t;
    }, 0);
}

function disjoint(number) {
    var s = parseInt(Math.sqrt(number * 2)),
        max_l = 0,
        max_x = [], j, x;


    for (var i = 1; i < s; i++) {
        j = 0;
        x = [];
        while (sum(x) < number){
            x.push((i+j)*(i+j+1)/2);
            j += 1;
        }
        if (sum(x) == number && max_l < x.length) {
            max_x = x;
            max_l = x.length;
        }
    }
    return max_x;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.deepEqual(disjoint(64), [15, 21, 28], "1st example");
    assert.deepEqual(disjoint(371), [36, 45, 55, 66, 78, 91], "1st example");
    assert.deepEqual(disjoint(225), [105, 120], "1st example");
    assert.deepEqual(disjoint(882), [], "1st example");
    console.log("Earn cool rewards by using the 'Check' button!");
}

