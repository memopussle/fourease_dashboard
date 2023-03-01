import express from "express";
import { createDashboard } from "../controllers/dashboard";
import verifyToken from "../middleware/auth";

const router = express.Router();

// create data for the user
router.post("/", verifyToken, createDashboard);

export default router;
