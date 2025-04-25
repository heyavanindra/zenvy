import express, { Request, Response, Router } from "express";

let arr = [];
const authRouter: Router = express.Router();
authRouter.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  arr.push({ username, password, email });
  res.json({
    message: arr,
  });
});

export default authRouter;
