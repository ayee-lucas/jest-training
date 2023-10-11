const adding = require("./adding");

describe("test addition of 2 numbers", () => {
  test("add 3 and 5 should equal to 8", () => {
    expect(adding(3, 5)).toBe(8);
  });
});
