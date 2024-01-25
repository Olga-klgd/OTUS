import { sum } from "./sum.js";
import { mult } from "./sum.js";
describe("sum", () => {
  it("should return sum of numbers", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
describe("mult", () => {
  it("should return mult of numbers", () => {
    expect(mult(3, 4)).toEqual(12);
  });
});
