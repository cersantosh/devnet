import userModel from "../../models/user/user_model.js";
import decodePassword from "../../utills/password/decode_password.js";
class AuthService {
  async isUserExist(email) {
    const user = await userModel.findOne({ email });
    return user;
  }
  async checkPassword(enteredPassword, hashedPassword) {
    const isMatch = await decodePassword(enteredPassword, hashedPassword);
    return isMatch;
  }
}

export default AuthService;
