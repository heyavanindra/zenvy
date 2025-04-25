import express, { Request, Response } from "express";
import authRouter from "./auth/auth";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("working");
});
app.use("/auth", authRouter);
app.listen(3000, () => {
  console.log("running on port 3000");
});
