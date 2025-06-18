import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    console.log("Token not found");
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).json({ message: "Token varification failed" });
    }

    req.user = { id: verified.id };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
