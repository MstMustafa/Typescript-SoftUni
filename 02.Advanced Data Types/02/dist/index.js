function personInfo(firstName, lastName, age) {
    var myObj = {
        firstName: firstName,
        lastName: lastName,
        age: Number(age)
    };
    return myObj;
}
var person = personInfo("Peter", "Pan", "20");
console.log(person);
