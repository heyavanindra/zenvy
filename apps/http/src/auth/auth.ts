import express, { Request, Response, Router } from "express";
import prisma from '@repo/db/client'; 
import {signupSchema} from '@repo/common/common'    

type arrtype = {
  username : String,
  email : String,
  password : String

}  

var arr : arrtype[];

const authRouter: Router = express.Router();

authRouter.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  signupSchema.safeParse 

  try {
    const userData = await prisma.user.create({
      data: {
        username : username,
        email : email,
        password : password
  
      }
    })

    res.json({
      message : userData.id
    })

  } catch (error) {
    res.json({
      message : "something went wrong.."
    }).status(501)
  }

  
  res.json({
    message: arr,
  });
});


authRouter.post("/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const filteredArr = arr.filter( (arr) =>{
     arr.email === email, 
     arr.password === password
  })

  if (!filteredArr){
    res.json({
      message : "not registerd"
    }).status(404)
  }
  res.json({
    message: arr,
  });
});

export default authRouter;
