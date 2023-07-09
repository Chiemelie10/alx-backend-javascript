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
