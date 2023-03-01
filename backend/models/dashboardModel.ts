import { Schema, model } from "mongoose";

const dashboardSchema = new Schema(
  {
    energy_level: { type: Number, default: null, required: true },
    exercise_level: { type: Number, default: null, required: true },
    emotion_level: { type: Number, unique: true, required: true },
    eat_level: { type: Number, required: true },
    average_score: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Dashboard = model("Dashboard", dashboardSchema);
export default Dashboard;
