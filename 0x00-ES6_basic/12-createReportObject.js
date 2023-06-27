export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  const reportObject = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).Length;
    },
  };

  return reportObject;
}
