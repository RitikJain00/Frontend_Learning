const student = {
  name: "Ritik",
  RegNo: "2023Ca79"
};

console.log(student)


function course({name, price}: {name:string , price: number}): void {
  console.log(name)
  console.log(price)
}

course({
  name:"Web",
   price: 100
  })

  