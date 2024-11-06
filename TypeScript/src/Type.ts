type Employee = {
  readonly _id: string    // only we can read it can not be change
  name: string,
  email: string,
  isActive: boolean,
  creditCard?: boolean    // optional
}


function createEmployee(emp: Employee): Employee {
  return {_id: "24", name: "ritik", email: "ritik@gmail.com", isActive: true }
}


createEmployee({_id: "24", name: "ritik", email: "ritik@gmail.com", isActive: true })

const emp: Employee = {
  _id: "123",
  name: "vijay",
  email: "vijay@gmail.com",
  isActive:  false
}


emp.email = "vijay2365@gmail.com"