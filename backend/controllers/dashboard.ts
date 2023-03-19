import { Request, Response } from "express";
import User from "../models/userModel";
import Dashboard from "../models/dashboardModel";
import { averageScore } from "../utils/averageScore";
import { isValidId } from "../utils/isValid";

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


export const updateDashboardItem = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const fixedItem = req.body;
  const { energy_level, exercise_level, emotion_level, eat_level } = fixedItem;
  const average_score = averageScore(
    energy_level,
    exercise_level,
    emotion_level,
    eat_level
  );
  // insert this average_score to fixedItem;
  fixedItem.average_score = average_score;
  if (!isValidId(itemId)) {
    res.status(400).send("Item is not found!");
  }

  const updateItem = await Dashboard.findByIdAndUpdate(itemId, fixedItem, {
    new: true,
  });
  res.status(201).send(updateItem);
};
