const substraction = (x, y) => {
  let absResult = x - y;

  // or Math.abs(absResult)

  return absResult < 0 ? absResult * -1 : absResult;
};

module.exports = substraction;
