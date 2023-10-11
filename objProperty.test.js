describe('Test if an object has an property named "age"', () => {
  test("user has age property", () => {
    const user = {
      name: "juan",
      age: 10,
    };

    expect(user).toHaveProperty("age");
  });

  test("user doesn't have an age property", () => {
    const user = {
      name: "juan",
    };

    expect(user).not.toHaveProperty("age");
  });
});
