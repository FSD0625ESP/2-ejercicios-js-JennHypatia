const removeFromArray = function (array, ...valors) {
  const values = Array.from(valors);
  return array.filter((item) => !values.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
