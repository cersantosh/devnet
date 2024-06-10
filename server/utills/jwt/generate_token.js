import jwt from "jsonwebtoken";
const generateJWTToken = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: "1h", // Token expiration time
  };

  const token = jwt.sign(payload, secret, options);
  return token;
};

export default generateJWTToken;
