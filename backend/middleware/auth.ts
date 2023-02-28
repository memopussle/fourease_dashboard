import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../Model/Models";
import User from "../models/userModel";

const verifyToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    (authHeader && authHeader.split(" ")[1]);

  // if no token is found
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    // decode JWT
    const decoded: JwtPayload = jwt.verify(token, process.env.TOKEN_KEY);

    // verify if user exists
    const user = await User.findOne({
      _id: decoded.data.user_id,
      email: decoded.data.email,
    });

    if (!user) {
      throw new Error("User cannot find!!");
    }

    // set user info exp, data, expiration from decoded JWT
    req.user = decoded as AuthenticatedRequest["user"];
    console.log(req.user);
    next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};

export default verifyToken;
