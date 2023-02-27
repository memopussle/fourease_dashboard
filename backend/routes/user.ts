import express from "express";
import verifyToken from "../middleware/auth";
import { register, welcome, login } from "../controllers/user";
const router = express.Router();

router.get("/", verifyToken, welcome);

router.post("/register", register);

router.post("/login", login);

export default router;
