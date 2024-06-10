import AuthService from "../../../../service/auth/auth_service.js";
import generateJWTToken from "../../../../utills/jwt/generate_token.js";
const authService = new AuthService();
class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await authService.isUserExist(email);
      if (!user) {
        return res.status(400).json({
          success: true,
          code: "EMAIL",
          message: "User does not exist",
        });
      }

      const isMatch = await authService.checkPassword(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          success: true,
          code: "PASSWORD",
          message: "Invalid Password",
        });

      const token = generateJWTToken(user);

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "None",
      });
      res.status(200).json({
        success: true,
        code: "LOGIN",
        message: "Login successful",
        response: user,
      });
    } catch (error) {
      res.status(500).json({ success: false, code: "ERROR", message: error });
    }
  }

  async logout(req, res) {
    res.cookie("token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "None",
      expires: new Date(0),
    });
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  }
}

export default AuthController;
