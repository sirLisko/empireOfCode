"use strict";

function flattenArray(array, result) {
    var index = -1, length = array.length;

    while (++index < length) {
        var value = array[index];
        if (Array.isArray(value)) {
            flattenArray(value, result);
        } else {
            result.push(value);
        }
    }

    return result;
}

function flatList(array) {
    var length = array ? array.length : 0;
    return length ? flattenArray(array, []) : [];
}

var assert = require("assert");

if (!global.is_checking) {
    assert.deepEqual(flatList([1, 2, 3]), [1, 2, 3], "Flat");
    assert.deepEqual(flatList([1, [2, 2, 2], 4]), [1, 2, 2, 2, 4], "One");
    assert.deepEqual(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]), [2, 4, 5, 6, 6, 6, 6, 6, 7], "Nested");
    assert.deepEqual(flatList([-1, [1, [-2], 1], -1]), [-1, 1, -2, 1, -1], "In In");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
