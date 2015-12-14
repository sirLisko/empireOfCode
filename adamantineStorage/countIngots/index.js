"use strict";

function countIngots(report) {
	var rep = report.split(",");
	var count = 0;
	rep.forEach(function(r){
		var line = (r[0].charCodeAt() - 65);
		count += line * 10 - line;
		count += parseInt(r[1]);
	})
	return count;
}

var assert = require("assert");

console.log(countIngots("A2,B1"), 12, "Two and ten");
console.log(countIngots("A1,A1,A1"), 3, "One, two, three");
console.log(countIngots("Z9,X8,Y7"), 672, "XYZ");
console.log(countIngots("C1,D1,B1,E1,F1"), 140, "Daily");
