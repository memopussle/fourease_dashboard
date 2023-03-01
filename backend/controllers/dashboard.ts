import { Request, Response } from "express";
import User from "../models/userModel";
import Dashboard from "../models/dashboardModel";

export const createDashboard = async (req: Request, res: Response) => {
  const { energy_level, exercise_level, emotion_level, eat_level } = req.body;
  const authHeader = req.headers["authorization"];
  const token: string = authHeader && authHeader.split(" ")[1];

  const averageScore =
    (energy_level + exercise_level + emotion_level + eat_level) / 4;

  // find the user that has same token
  const findUser = await User.findOne({
    token: token,
  });

  if (!findUser) {
    throw new Error("Invalid user!");
  }

  // set this user id
  const newData = new Dashboard({
    user_id: findUser._id,
    energy_level,
    exercise_level,
    emotion_level,
    eat_level,
    average_score: averageScore,
  });

  const data = await newData.save();

  res.status(201).send(data);
};
