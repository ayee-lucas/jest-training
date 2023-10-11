const sortArr = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortArr([3, 1, 4, 1, 5, 9, 2, 6, 5]));

module.exports = sortArr;
