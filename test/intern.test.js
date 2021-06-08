const Intern = require("../lib/intern");

test("can create new intern object", () => {
  const emp = new Intern();

  expect(typeof emp).toBe("object");
});

test("able to get correct name of interns school", () => {
  const testInternSchool = "George Washington";
  const emp = new Intern("joe", "4", "joe@gmail.com", "George Washington");
  expect(emp.getSchool()).toBe(testInternSchool);
});
