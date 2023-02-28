import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
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

const Dashboard = mongoose.model("Dashboard", dashboardSchema);
export default Dashboard;
