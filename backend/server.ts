import { Request, Response } from "express";
import http from "http";
import app from "./app";

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Okay!!!");
});

server.listen(PORT, () => {
  console.log("Running on port 8080");
});
