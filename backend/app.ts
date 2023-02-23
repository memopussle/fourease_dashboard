import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

import { connect } from "./src/config/database";
connect();

const app = express();
app.use(express.json());

export default app;
