import bcrypt from "bcrypt";
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export default hashPassword;
