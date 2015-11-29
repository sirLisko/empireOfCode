"use strict";

function checkSquares(combo, lines) {
    return combo.filter(function(square){
        return square.every(function(line){
            return lines.some(function(l){
                return (line[0] === l[0] && line[1] === l[1]);
            });
        });
    }).length;
}

//TODO: refactor this function, it's pretty horrible (shame on me!!!)
function possibleCombo(vertex, size){
    var combinations = [];

    for (var i = 0; i < vertex.length; i++) {
        var comb = [];
        if ((vertex[i][1] - vertex[i][0]) / (size  + 1) === 1) {
            var top = vertex[i][0];

            comb.push([top, top + 1]);

            comb.push([top + 1, top + 1 + size]);

            comb.push([top + size, top + 1 + size]);

            comb.push([top, top + size]);
        } else if ((vertex[i][1] - vertex[i][0]) / (size  + 1) === 2) {
            comb.push([top, top + 1]);
            comb.push([top + 1, top + 2]);

            comb.push([top + 2, top + 2 + size]);
            comb.push([top + 2 + size, top + 2 + size + size]);

            comb.push([top + 1 + size + size, top + 2 + size + size]);
            comb.push([top + size + size, top + 1 + size + size]);

            comb.push([top, top + size]);
            comb.push([top + size, top + size + size]);
        } else if ((vertex[i][1] - vertex[i][0]) / (size  + 1) === 3) {
            comb.push([top, top + 1]);
            comb.push([top + 1, top + 2]);
            comb.push([top + 2, top + 3]);

            comb.push([top + 3, top + 3 + size]);
            comb.push([top + 3 + size, top + 3 + size + size]);
            comb.push([top + 3 + size + size, top + 3 + size + size + size]);

            comb.push([top + 2 + size + size + size, top + 3 + size + size + size]);
            comb.push([top + 1 + size + size + size, top + 2 + size + size + size]);
            comb.push([top + size + size + size, top + 1 + size + size + size]);

            comb.push([top, top + size]);
            comb.push([top + size, top + size + size]);
            comb.push([top + size + size, top + size + size + size]);
        } else if ((vertex[i][1] - vertex[i][0]) / (size  + 1) === 4) {
            comb.push([top, top + 1]);
            comb.push([top + 1, top + 2]);
            comb.push([top + 2, top + 3]);
            comb.push([top + 3, top + 4]);

            comb.push([top + 4, top + 4 + size]);
            comb.push([top + 4 + size, top + 4 + size + size]);
            comb.push([top + 4 + size + size, top + 4 + size + size + size]);
            comb.push([top + 4 + size + size, top + 4 + size + size + size]);
            comb.push([top + 4 + size + size + size, top + 4 + size + size + size + size]);

            comb.push([top + 3 + size + size + size + size, top + 4 + size + size + size + size]);
            comb.push([top + 2 + size + size + size + size, top + 3 + size + size + size + size]);
            comb.push([top + 1 + size + size + size + size, top + 2 + size + size + size + size]);
            comb.push([top + size + size + size + size, top + 1 + size + size + size + size]);

            comb.push([top, top + size]);
            comb.push([top + size, top + size + size]);
            comb.push([top + size + size, top + size + size + size]);
            comb.push([top + size + size + size, top + size + size + size + size]);
        }
        combinations.push(comb);
    }
    return combinations;
}

function filterZeros(list){
    var zeros = list.filter(function(l){
        return (l[0] === 0 || l[1] === 0);
    }).map(function(l){
        if (l[0] === 0) {
            return l[1];
        }
        if (l[1] === 0) {
            return l[0];
        }
    });
    return list.filter(function(l){
        return !zeros.some(function(z){
            return (z === l[0] || z === l[1]);
        });
    });

}

function possibleVertexSquares(size){
    var tot = size * size;
    var vertex = [];
    for (var i = 1; i <= (tot - size - 1); i++) {
        for (var j = (i + size + 1); j < (tot + 1); j = (j + size + 1)) {
            if (j % size !== 0 && j % size < i % size) {
                continue;
            }
            if (i % size !== 0) {
                vertex.push([i, j]);
            }
        }
    }
    return vertex;
}

function checkSize(list) {
    for (var i = 0; i < list.length - 1; i++) {
        if (list[i][0] > 16 || list[i][1] > 16) {
            return 5;
        }
    }
    return 4;
}

function normaliseList(list) {
    return list.map(function(l){
        return l.sort(function(a, b){
            return a - b;
        });
    });
}

function countSquares() {
    var list = Array.prototype.slice.call(arguments);
    var size = checkSize(list);

    return checkSquares(
        possibleCombo(possibleVertexSquares(size), size),
        filterZeros(normaliseList(list))
    );
}

var assert = require("assert");

if (!global.is_checking) {
    // Rank 1
    assert.equal(countSquares([1, 2], [3, 4], [1, 5], [2, 6], [4, 8], [5, 6], [6, 7], [7, 8],
            [6, 10], [7, 11], [8, 12], [10, 11], [10, 14], [12, 16], [14, 15], [15, 16]),
        3, "First, from description");
    assert.equal(countSquares([1, 2], [2, 3], [3, 4], [1, 5], [4, 8], [6, 7], [5, 9], [6, 10],
            [7, 11], [8, 12], [9, 13], [10, 11], [12, 16], [13, 14], [14, 15], [15, 16]),
        2, "Second, from description");
    assert.equal(countSquares([1, 2], [1, 5], [2, 6], [5, 6]),
        1, "Third, one small square");
    assert.equal(countSquares([1, 2], [1, 5], [2, 6], [5, 9], [6, 10], [9, 10]),
        0, "Fourth, it's not square");
    assert.equal(countSquares([16, 15], [16, 12], [15, 11], [11, 10],
            [10, 14], [14, 13], [13, 9]),
        0, "Fifth, snake");

    // Rank 2
    assert.equal(countSquares([1, 2], [2, 7], [7, 6], [6, 1], [25, 24],
            [24, 19], [19, 20], [20, 25]),
        2, "25");
    // Rank 3
    assert.equal(countSquares([1, 2], [2, 7], [7, 6], [6, 1], [25, 24], [24, 19], [19, 20], [20, 25],
            [6, 11], [0, 19], [10, 0], [11, 16], [16, 21], [21, 22], [22, 23],
            [23, 24], [20, 15], [15, 10], [10, 5], [5, 4], [4, 3], [3, 2]),
        1, "With zeroes");
    console.log("All done? Earn rewards by using the 'Check' button!");
}
