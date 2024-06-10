import verifyJWTToken from "../../utills/jwt/verify_token.js";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) {
    return res
      .status(401)
      .json({ succcess: true, message: "JWT token expired." });
  }

  try {
    const decoded = verifyJWTToken(token);
    req.user = decoded; // Attach the decoded payload to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ succcess: false, message: error });
  }
};

export default authMiddleware;
