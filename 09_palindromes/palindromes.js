const palindromes = function (string) {
  const soloLetrasYNumeros = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const invertido = soloLetrasYNumeros.split("").reverse().join("");
  return soloLetrasYNumeros === invertido;
};

// Do not edit below this line
module.exports = palindromes;
