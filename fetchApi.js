const url = "https://dog.ceo/api/breeds/image/random";

const getDog = async () => {
  try {
    const res = await fetch(url);

    const json = await res.json();

    console.log(json);

    return json;
  } catch (err) {
    console.log(err);

    return null;
  }
};

module.exports = getDog;
