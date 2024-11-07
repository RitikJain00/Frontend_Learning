class Student {
  name: string
  private email: string

  constructor(name : string, email: string){
    this.name = name,
    this.email = email
  }

  get gettingEmail(): string {       // getter
    return this.email
  }
}


let st1 = new Student('ritik', 'ritikjain590@gmail.com');

console.log(st1.name)
// console.log(st1.email)   not accessible  

console.log(st1.gettingEmail)
