import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user?: {
    exp: number;
    data: {
      user_id: string;
      email: string;
    };
    iat: number;
  };
}
