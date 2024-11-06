// const x: number = 10;
// console.log(x);

//////////////////////////////////////////////////////////////////////////////////////

// function isLegal(age: number) : boolean {
//   if(age >= 18) return true;
//   else return false
// }

// const legal = isLegal(17);

// console.log(legal)

///////////////////////////////////////////////////////////////////////////////////////

// function runAfter1S( fn: () => void) {
//   setTimeout(fn, 1000);
// }

// runAfter1S(function () {
//   console.log("Hello ritik")
// });



//////////////////////////////////////////////////////////////////////// Interface

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email ?: string;    // optional 
};


function isLegal(user: User) {
  if(user.age >= 18) return true;
  else return false
}

const check = isLegal({
  firstName: "Ritik",
  lastName: "Jain",
  age: 20
})

console.log(check)