"use strict";
// const x: number = 10;
// console.log(x);
;
function isLegal(user) {
    if (user.age >= 18)
        return true;
    else
        return false;
}
const check = isLegal({
    firstName: "Ritik",
    lastName: "Jain",
    age: 20
});
console.log(check);
