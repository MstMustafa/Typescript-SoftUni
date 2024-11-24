function listEmployees(employees) {
    employees.forEach(function (employee) {
        var personalNumber = employee.length;
        console.log("Name: ".concat(employee, " -- Personal Number: ").concat(personalNumber));
    });
}
var employees1 = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];
listEmployees(employees1);
