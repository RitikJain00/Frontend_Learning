"use strict";
var SeatCount;
(function (SeatCount) {
    SeatCount[SeatCount["Aisle"] = 0] = "Aisle";
    SeatCount[SeatCount["Middle"] = 1] = "Middle";
    SeatCount[SeatCount["Window"] = 2] = "Window";
})(SeatCount || (SeatCount = {}));
const yourSeat = SeatCount.Aisle;
console.log(yourSeat);
