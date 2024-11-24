function listEmployees(employees: string[]): void {
    employees.forEach(employee => {
        const personalNumber = employee.length;
        console.log(`Name: ${employee} -- Personal Number: ${personalNumber}`);
    });
}

const employees1 = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];
listEmployees(employees1);