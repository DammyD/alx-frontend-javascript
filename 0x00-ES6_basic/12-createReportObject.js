export default function createReportObject(employeesList) {
  {
  allEmployees: {
     ...employeesList,
  },
  getNumberOfDepartments: (employeesList) => object.keys(employeesList).length,
 };
}
