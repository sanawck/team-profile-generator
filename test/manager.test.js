const Manager = require("../lib/manager");

test("can find office number", () => {
  const emp = new Manager();

  expect(typeof emp).toBe("object");
});

test("able to get correct manager role", () => {
  const testRole = "Manager";
  const emp = new Manager("bob", "4", "bob@gmail.com", "865-245-6622");
  expect(emp.getRole()).toBe(testRole);
});

test("able to get correct office number", () => {
  const testManagerOffice = "865-245-6622";
  const emp = new Manager("ben", "6", "ben@gmail.com", "865-245-6622");
  expect(emp.getOfficeNumber()).toBe(testManagerOffice);
});
