// Instructor Rachel Thiim recommended using these exact tests to complete Module 10's Challenge
// Code for unit test pulled from class repository

const Engineer = require("../lib/Engineer");

test("The fourth constructor argument will set the \"github\" property", () => {
  // Arrange
  const controlVal = "MyGithubName";
  const e = new Engineer("Mavis", 1, "test@email.com", controlVal);
  // Assert
  // Assert
  expect(e.github).toBe(controlVal);
});

test("getRole() returns an \"Engineer\" string", () => {
  // Arrange
  const controlVal = "Engineer";
  const e = new Engineer("Mavis", 1, "test@email.com", "MyGithubName");
  // Assert
  expect(e.getRole()).toBe(controlVal);
});

test("getGithub() returns a \"github\" string", () => {
  // Arrange
  const controlVal = "MyGithubName";
  const e = new Engineer("Mavis", 1, "test@email.com", controlVal);
  //Assert
  expect(e.getGithub()).toBe(controlVal);
});
