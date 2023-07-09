interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Eze',
  fullTimeEmployee: false,
  lastName: 'Chiemelie',
  location: 'Nigeria',
  contract: false
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Nigel',
  lastName: 'Eze',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

const response = printTeacher('John', 'Doe');
console.log(response);
