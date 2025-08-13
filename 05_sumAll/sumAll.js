function sumAll(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let suma = 0;

  for (let i = min; i <= max; i++) {
    suma += i;
  }

  return suma;
}

// Do not edit below this line
module.exports = sumAll;
