const getDog = require("./fetchApi");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        message: "https://images.dog.ceo/breeds/dane-great/n02109047_5588.jpg",
        status: "success",
      }),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

it("Should get a dog", async () => {
  const dog = await getDog();

  const expected = { status: "success" };

  expect(dog).toMatchObject(expected);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("handles data retrieval failure", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("Error data failure"));

  const dog = await getDog();

  expect(dog).toEqual(null);

  expect(fetch).toHaveBeenCalledWith("https://dog.ceo/api/breeds/image/random");
});
