function personInfo(firstName:string , lastName:string, age:string):{firstName:string , lastName:string, age:number}{

    let myObj = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };

    return myObj;

}

const person = personInfo("Peter", 
"Pan",
"20"
);
console.log(person);