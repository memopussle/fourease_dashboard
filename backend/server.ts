import express, { Application, Request, Response } from "express";

const PORT = 8080;

const app: Application = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Finally works with --poll :)");
});

app.listen(PORT, () => {
  console.log("Running on port 8080");
});
