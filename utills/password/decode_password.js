import bcrypt from "bcrypt";
const decodePassword = async (enteredPassword, storedHashedPassword) => {
  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
  return isMatch;
};

export default decodePassword;
