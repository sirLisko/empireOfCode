"use strict";

function stripedWords(text) {
    var words = text.split(/[\s|,|\.|\?]/g);

    return words.filter(function(w){
        return w.match(/^([[b-df-hj-np-tv-xz][aeiouy])+[b-df-hj-np-tv-xz]?$/gi) || w.match(/^([aeiouy][b-df-hj-np-tv-xz])+[aeiouy]?$/gi);
    }).length;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    assert.equal(stripedWords("My name is ..."), 3, "All words are striped");
    assert.equal(stripedWords("Hello world"), 0, "No one");
    assert.equal(stripedWords("A quantity of striped words."), 1, "Only of");
    assert.equal(stripedWords("Dog,cat,mouse,bird.Human."), 3, "Dog, cat and human");
}
