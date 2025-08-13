const caesar = (str, shift) => {
  return str
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        let code = (char.charCodeAt(0) - 97 + shift) % 26;
        if (code < 0) code += 26;
        return String.fromCharCode(code + 97);
      } else if (/[A-Z]/.test(char)) {
        let code = (char.charCodeAt(0) - 65 + shift) % 26;
        if (code < 0) code += 26;
        return String.fromCharCode(code + 65);
      } else {
        return char;
      }
    })
    .join("");
};

// Do not edit below this line
module.exports = caesar;
