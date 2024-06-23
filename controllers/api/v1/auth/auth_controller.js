import AuthService from "../../../../service/auth/auth_service.js";
import generateJWTToken from "../../../../utills/jwt/generate_token.js";
const authService = new AuthService();
class AuthController {
  async login(req, res) {
    console.log("login");
    try {
      const { email, password } = req.body;
      const user = await authService.isUserExist(email);
      let isMatch = null;
      if(user){
        isMatch = await authService.checkPassword(password, user.password)
      }
      if (!user || !isMatch)
        return res.status(400).json({
          success: false,
          message: "Invalid Email and Password",
        });

      const token = generateJWTToken(user);

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        // sameSite: "None",
      });
      res.status(200).json({
        success: true,
        message: "Login successful",
        token : token,
        response: {
          _id : user._id,
          email : user.email
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  }

  async logout(req, res) {
    res.cookie("token", "", {
      httpOnly: true,
      secure: false,
      // sameSite: "None",
      expires: new Date(0),
    });
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  }
}

export default AuthController;
