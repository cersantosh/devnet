import jwt from "jsonwebtoken";
const verifyJWTToken =  (token) => {
  const decoded =  jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

export default verifyJWTToken;
