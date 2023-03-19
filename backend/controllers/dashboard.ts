import { Request, Response } from "express";
import Dashboard from "../models/dashboardModel";
import { averageScore } from "../utils/averageScore";
import { isValidId } from "../utils/isValid";
import { AuthenticatedRequest } from "../Model/Models";

export const createDashboard = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const { energy_level, exercise_level, emotion_level, eat_level } = req.body;

  // Check if req.user exists
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  const userId = req.user.data.user_id;

  const averageScore =
    (energy_level + exercise_level + emotion_level + eat_level) / 4;

  // set this user id
  const newData = new Dashboard({
    user: userId,
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
  const userId = req.user.data.user_id;
  const { energy_level, exercise_level, emotion_level, eat_level } = fixedItem;

  try {
    //find the item first
    const findItem = await Dashboard.findById(itemId);
    if (!findItem) {
      res.status(400).send("Item is not found!");
      return;
    }
    // only owner can update
    if (userId !== findItem.user?.toString()) {
      res.status(400).send("Unauthorised! You cannot update it.");
    }
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
    res.status(200).send(updateItem);
  } catch (error) {
    return res.status(500).send("Something went wrong.");
  }
};
