var student = {
    name: "Ritik",
    RegNo: "2023Ca79"
};
console.log(student);
function course(_a) {
    var name = _a.name, price = _a.price;
    console.log(name);
    console.log(price);
}
course({
    name: "Web",
    price: 100
});
