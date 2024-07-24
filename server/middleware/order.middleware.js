import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const tokenn = req.headers.authorization;

  const token = req.cookies.rununu_access_token;
  
  console.log("token", tokenn)
  if (!token)
    return res.status(401).json({ success: false, message: " order Unauthorized" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ success: false, message: "err unauthorized" });
    req.user = decoded;
    console.log("decoded",decoded)
    next();
  });
};
export default verifyUser;