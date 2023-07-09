const teacher3 = {
    firstName: 'Eze',
    fullTimeEmployee: false,
    lastName: 'Chiemelie',
    location: 'Nigeria',
    contract: false
};
const director1 = {
    firstName: 'Nigel',
    lastName: 'Eze',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
function printTeacher(firstName, lastName) {
    return `${firstName[0]}. ${lastName}`;
}
const response = printTeacher('John', 'Doe');
console.log(response);
