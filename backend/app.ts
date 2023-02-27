import express from "express";
import user from "./routes/user";
import * as dotenv from "dotenv";
dotenv.config();

import { connect } from "./config/database";
connect();

const app = express();
app.use(express.json());
app.use("/", user);

export default app;
