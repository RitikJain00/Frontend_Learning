interface Teachers {
  readonly sno: number,
  name: string,
  email: string,
  isAvailable: boolean
  salary?: number
  teaches() : string
}

 interface Teachers {       // Reopneing an interface  which is not possible in type
  phoneNo: string
}

let t1: Teachers = {
  sno: 1,
  name: 'Ritik',
   email: 'ritik@gmail.com',
   isAvailable: true,
   phoneNo: '999988887777',
    teaches(){
     return "teaching"
    }
}


interface Examiner extends Teachers {           // inheritance in interfaces
  role: 'checker' | 'distributer' | 'proctor'
}

console.log(t1.teaches())