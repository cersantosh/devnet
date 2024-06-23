function generateLowerCase() {
  // here random create random number form 0 to 25 and 97 + 0 is 97 and similarly 25 + 97 is 122
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateSymbols() {
  let symbols = "!@#$%^&*()_+{}[]:;<>,.?~\\/-";
  let randomNumber = Math.floor(Math.random() * symbols.length);
  return symbols[randomNumber];
}

const passwordArray = [
  generateLowerCase,
  generateUpperCase,
  generateNumber,
  generateSymbols,
];

const randomPasswordGenerator = () => {
  const max = 16;
  const min = 10;
  const lengthOfPassword = Math.floor(Math.random() * (max - min + 1) + min);
  let password = "";
  for (let i = 0; i < 3; i++) {
    password += generateUpperCase();
  }
  for (let i = 0; i < 2; i++) {
    password += generateLowerCase();
  }

  for (let i = 0; i < 2; i++) {
    password += generateNumber();
  }

  for (let i = 0; i < 3; i++) {
    password += generateSymbols();
  }
  for (let i = 0; i < lengthOfPassword - 10; i++) {
    const randomNumber = Math.floor(Math.random() * passwordArray.length);
    password += passwordArray[randomNumber]();
  }
  return password;
};

export default randomPasswordGenerator;
