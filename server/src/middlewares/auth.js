import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: err.message });
      }
      req.userId = decoded.id;
      next();
    });
  } catch {
    return res.status(400).send({ message: "No token provided" });
  }
};
