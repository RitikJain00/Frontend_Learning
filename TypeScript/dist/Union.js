"use strict";
let luckyNum;
luckyNum = 5;
luckyNum = "5";
luckyNum = true;
function getDbId(id) {
    if (typeof id === 'string')
        id.toLowerCase();
    return id;
}
const data = [1, 2, 6, "5"];
let seat;
// seat = 'crew'    gives error
