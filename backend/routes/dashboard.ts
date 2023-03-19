import express from "express";
import { createDashboard, updateDashboardItem } from "../controllers/dashboard";
import verifyToken from "../middleware/auth";

const router = express.Router();

// create data for the new data
router.post("/", verifyToken, createDashboard);
// update the data item
router.put("/:itemId", verifyToken, updateDashboardItem);

export default router;
