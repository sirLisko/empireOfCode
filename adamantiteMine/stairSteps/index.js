"use strict";

//This code needs to be compressed

function golf(n,i,a){
    a=0;
    n.push(0);
    for(i=-1;++i<n.length;){
        a=a+n[(
            n[i] + n[i+1] <= n[i+1] &&
            n[i+2] && n[i+1] <=n[i+2] ||
            n[i]<0 && n[i+1]> n[i]
        )?++i:i];
    }
    return a;
}

// var assert = require("assert");
// if (!global.is_checking) {
//     # These "asserts" using only for self-checking and not necessary for auto-testing
//     assert.equal(golf([5, -3, -1, 2]), 6, "1st example");
//     assert.equal(golf([5, 6, -10, -7, 4]), 8, "2nd example");
//     assert.equal(golf([-11, 69, 77, -51, 23, 67, 35, 27, -25, 95]), 393, "3rd example");
//     assert.equal(golf([-21, -23, -69, -67, 1, 41, 97, 49, 27]), 125, "4th example");
//    console.log("All done? Earn rewards by using the 'Check' button!");
//}
