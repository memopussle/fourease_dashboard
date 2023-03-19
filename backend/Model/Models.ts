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

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  token: string;
}

export interface Dashboard {
  user: string;
  energy_level: number;
  exercise_level: number;
  emotion_level: number;
  eat_level: number;
  average_score: number;
}
