const sortArr = require("./sortArr");

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];

let expectedArr = [1, 1, 2, 3, 4, 5, 5, 6, 9];

describe("test sorting array", () => {
  test("sort array in asc order", () => {
    expect(sortArr(sortArr(arr))).toEqual(expectedArr);
  });
});
