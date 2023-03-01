import express from "express";
import user from "./routes/user";
import dashboard from "./routes/dashboard";
import * as dotenv from "dotenv";
dotenv.config();

import { connect } from "./config/database";

connect();

const app = express();
app.use(express.json());
app.use("/user", user);
app.use("/dashboard", dashboard);

export default app;
