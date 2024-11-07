"use strict";
let t1 = {
    sno: 1,
    name: 'Ritik',
    email: 'ritik@gmail.com',
    isAvailable: true,
    phoneNo: '999988887777',
    teaches() {
        return "teaching";
    }
};
console.log(t1.teaches());
