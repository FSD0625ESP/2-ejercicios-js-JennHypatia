const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (array) {
  if (array.length === 0) {
    return 0;
  }

  return array.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a < 0) {
    return "ERROR";
  }
  if (a === 0) {
    return 1;
  }
  let resultado = 1;

  for (let i = 1; i <= a; i++) {
    resultado *= i;
  }

  return resultado;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
