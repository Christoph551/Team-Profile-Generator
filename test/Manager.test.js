// Instructor Rachel Thiim recommended using these exact tests to complete Module 10's Challenge
// Code for unit test pulled from class repository

const Manager = require("../lib/Manager");

test("The fourth constructor argument will set the \"officeNumber\" property", () => {
  // Arrange
  const controlVal = 202;
  const e = new Manager("Mavis", 1, "test@email.com", controlVal);
  // Assert
  expect(e.officeNumber).toBe(controlVal);
});

test("getRole() returns a \"Manager\" string", () => {
  // Arrange
  const controlVal = "Manager";
  const e = new Manager("Mavis", 1, "test@email.com", 202);
  // Assert
  expect(e.getRole()).toBe(controlVal);
});

test("getOfficeNumber() returns an \"officeNumber\" string", () => {
  // Arrange
  const controlVal = 202;
  const e = new Manager("Mavis", 1, "test@email.com", controlVal);
  // Assert
  expect(e.getOfficeNumber()).toBe(controlVal);
});
