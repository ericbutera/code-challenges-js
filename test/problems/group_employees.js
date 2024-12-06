// Input
const employees = [
  { id: 1, name: "Alice", department: "Engineering" },
  { id: 2, name: "Bob", department: "HR" },
  { id: 3, name: "Charlie", department: "Engineering" },
  { id: 4, name: "Diana", department: "HR" },
  { id: 5, name: "Eve", department: "Sales" },
];

function groupByDepartment(employees) {
  res = {};
  for (let employee of employees) {
    let key = employee.department;
    if (!res.hasOwnProperty(key)) {
      res[key] = [];
    }
    res[key].push(employee.name);
  }

  for (let department in res) {
    res[department].sort();
  }

  return res;
}

// Output
// groupByDepartment(employees);
// Returns:
// {
//   "Engineering": ["Alice", "Charlie"],
//   "HR": ["Bob", "Diana"],
//   "Sales": ["Eve"]
// }

/*
You are given an array of employee objects. Each employee has the following properties:

    id (number): A unique identifier for the employee.
    name (string): The name of the employee.
    department (string): The department where the employee works.

Write a function groupByDepartment(employees) that:

    Groups the employees by their department into an object.
    The keys of the object should be department names, and the values should be arrays of employee names sorted alphabetically.
    Returns the grouped object.

Constraints:

    The employees array will have at most 10^3 elements.
    The department property is guaranteed to have only alphabetic characters.
    Employee name is unique within the input array.
*/

const assert = require("assert");
describe("groupByDepartment", () => {
  it("example 1", () => {
    expected = {
      Engineering: ["Alice", "Charlie"],
      HR: ["Bob", "Diana"],
      Sales: ["Eve"],
    };
    assert.deepEqual(groupByDepartment(employees), expected);
  });
});
