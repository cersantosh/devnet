const isStrongPassword = (password) => {
    const capitalLettersRegex = /[A-Z]/g;
    const smallLettersRegex = /[a-z]/g;
    const numbersRegex = /[0-9]/g;
    const specialSymbolsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
  
    // Check the conditions
    const capitalLettersCount = (password.match(capitalLettersRegex) || []).length;
    const smallLettersCount = (password.match(smallLettersRegex) || []).length;
    const numbersCount = (password.match(numbersRegex) || []).length;
    const specialSymbolsCount = (password.match(specialSymbolsRegex) || []).length;
  
    // Verify if all conditions are met
    const isStrong =
      capitalLettersCount >= 3 &&
      smallLettersCount >= 2 &&
      numbersCount >= 2 &&
      specialSymbolsCount >= 3;
  
    return isStrong;
  }

  export default isStrongPassword;
  
  