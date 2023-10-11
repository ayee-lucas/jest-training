const multiply = require("./multiply");

describe("test multiply postivie scenarios", () => {
  test("multiply 3*2 should equal to 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test("multiply -4 and -6 should yield 24", () => {
    expect(multiply(-4, -6)).toBe(24);
  });
});
