import express, { Request, Response } from "express";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/", verifyToken, (req: Request, res: Response) => {
  const { energy_level, exercise_level, emotion_level, eat_level } = req.body;
  console.log(energy_level, exercise_level, emotion_level, eat_level);
  res.send("OK");
});

export default router;
