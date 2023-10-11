const substraction = require("./substraction");

describe("test substraction of 2 positive numbers", () => {
  test("substract -2 from 7 should result in 9", () => {
    expect(substraction(-2, 7)).toBe(9);
  });
});
