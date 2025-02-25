import jwt from "jsonwebtoken";
import conf from "../conf/conf.js";

const JWT_SECRET = conf.JWT_SECRET;

export const authenticateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  //   console.log("jwtmiddleware", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1]; // Extract actual token

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // Use JWT_SECRET consistently
    // console.log("decoded", decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};
