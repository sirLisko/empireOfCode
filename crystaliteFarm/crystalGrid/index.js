"use strict";

function checkGrid(grid) {
    var horizontal = grid.every(function(crystal){
        return crystal.every(function(atom, index){
            return atom !== crystal[index + 1];
        });
    });
    var vertical = true;
    for (var i = 0; i < grid.length - 1; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === grid[i + 1][j]) {
                vertical = false;
                break;
            }
        }
    }

    return horizontal && vertical;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(checkGrid([["X", "Z"], ["Z", "X"]]), true, "2x2 Good");
    assert.equal(checkGrid([
        ["X", "Z", "X"],
        ["Z", "X", "Z"],
        ["X", "Z", "X"]]), true, "3x3 Good");
    assert.equal(checkGrid([
        ["X", "Z", "X", "Z"],
        ["Z", "X", "Z", "X"]]), true, "2x4 Good");
    assert.equal(checkGrid([
        ["X", "X"],
        ["X", "X"]]), false, "2x2 Bad");
    assert.equal(checkGrid([
        ["X", "Z", "X"],
        ["Z", "Z", "Z"],
        ["X", "Z", "X"]]), false, "3x3 Bad");
    assert.equal(checkGrid([
        ["X", "Z", "X", "Z"],
        ["X", "Z", "X", "Z"]]), false, "2x4 Bad");
    console.log("Use 'Check' to earn sweet rewards!");
}
