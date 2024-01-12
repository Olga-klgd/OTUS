const factorial = require("./factorial");

test("calculate factorial of 5", () => {
  expect(factorial(5)).toBe(120);
});
