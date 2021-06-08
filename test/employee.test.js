const Employee = require("../lib/employee");

test("can create new employee object", () => {
  const emp = new Employee();

  expect(typeof emp).toBe("object");
});

test("able to get correct name via getname method", () => {
  const testEmpName = "Sana";
  const emp = new Employee(testEmpName);
  expect(emp.getName()).toBe(testEmpName);
});
