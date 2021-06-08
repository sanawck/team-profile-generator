const Engineer = require("../lib/engineer");

test("can create new engineer object", () => {
  const emp = new Engineer();

  expect(typeof emp).toBe("object");
});

test("able to get correct engineer role", () => {
  const testRole = "Engineer";
  const emp = new Engineer("bob", "4", "bob@gmail.com", "bobgithub2");
  expect(emp.getRole()).toBe(testRole);
});

test("able to get correct github user", () => {
  const testGithubUser = "bobgithub2";
  const emp = new Engineer("bob", "4", "bob@gmail.com", "bobgithub2");
  expect(emp.getGithub()).toBe(testGithubUser);
});
