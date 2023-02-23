import { Request, Response } from "express";
import http from "http";
import app from "./app";

const server = http.createServer(app);

const port = process.env.API_PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Okay!!!");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
