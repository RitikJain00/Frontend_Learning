
let user = (name: string, email: string, isLogged: boolean = false): void => {

  console.log(name + " "+ email + " " + isLogged)
}

user('Ritik', "ritikjain6974@gmail.com", true)

user('Shreya', "shreyajain112@gmail.com")


let sum = (a: number, b: number): number => {
    return a+b;
}

console.log(sum(5,7));