"use strict";

var R = 6371;

function convertCoord(c) {
    var lat = c.split(/[ ,]+/)[0].match(/(\d+)°(\d+)′(\d+)″(\w)/);
    var lon = c.split(/[ ,]+/)[1].match(/(\d+)°(\d+)′(\d+)″(\w)/);

    return {
        lat: (parseInt(lat[1]) + lat[2]/60 + lat[3]/(60*60)) * (lat[4] === "S" ? -1 : 1),
        lon: (parseInt(lon[1]) + lon[2]/60 + lon[3]/(60*60)) * (lon[4] === "E" ? -1 : 1)
    };
}

function distance(first, second) {
    first = convertCoord(first);
    second = convertCoord(second);

    var dLat = (second.lat-first.lat) * Math.PI / 180;
    var dLon = (second.lon-first.lon) * Math.PI / 180;
    var lat1 = first.lat* Math.PI / 180;
    var lat2 = second.lat* Math.PI / 180;

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    console.log( Math.round(R * c * 10) / 10);
    return Math.round(R * c * 10) / 10;
}

var assert = require("assert");

if (!global.is_checking) {
    // These "asserts" using only for self-checking and not necessary for auto-testing
    var almostEqual = function (checked, correct, significantDigits) {
        var precision = Math.pow(0.1, significantDigits);
        return Math.abs(correct - checked) < precision;
    };

    assert(almostEqual(distance("51°28′48″N 0°0′0″E", "46°12′0″N, 6°9′0″E"), 739.2), "From Greenwich to Geneva");
    assert(almostEqual(distance("90°0′0″N 0°0′0″E", "90°0′0″S, 0°0′0″W"), 20015.1), "From South to North");
    assert(almostEqual(distance("33°51′31″S, 151°12′51″E", "40°46′22″N 73°59′3″W"), 15990.2), "Opera Night");
    console.log("Use 'Check' to earn sweet rewards!");
}
