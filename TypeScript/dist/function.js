var user = function (name, email, isLogged) {
    if (isLogged === void 0) { isLogged = false; }
    console.log(name + " " + email + " " + isLogged);
};
user('Ritik', "ritikjain6974@gmail.com", true);
user('Shreya', "shreyajain112@gmail.com");
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 7));
