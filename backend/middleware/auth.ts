import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../Model/Models";

const verifyToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  // if no token is found
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    // decode JWT
    const decoded: string | JwtPayload = jwt.verify(
      token,
      process.env.TOKEN_KEY as string
    );
    // set user info exp, data, expiration from decoded JWT
    req.user = decoded as AuthenticatedRequest["user"];
    console.log(req.user);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;
