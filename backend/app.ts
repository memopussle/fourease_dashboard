import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import verifyToken from "./middleware/auth";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

import { connect } from "./config/database";
import User from "./models/userModel";
connect();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Okay!!!");
});

app.get("/welcome", verifyToken, (req: Request, res: Response) => {
  res.status(200).send("Welcome 🙌 ");
});

// Register
app.post("/register", async (req: Request, res: Response) => {
  try {
    // get user input
    const { first_name, last_name, email, password } = req.body;

    // validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }

    // check if user exists
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedPassword = bcrypt.hashSync(password, 10);
    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // create jwt token
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // expires in 1 hour
        data: { user_id: user._id, email },
      },
      process.env.TOKEN_KEY as string
    );

    // save user token
    user.token = token;
    await user.save();

    // return new user
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

// Login
app.post("/login", async (req: Request, res: Response) => {
  try {
    // get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    // hashedpassword needs to be 2nd parameter!
    if (user && (await bcrypt.compareSync(password, user.password))) {
      // resign token incase it's expired
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60, // expires in 1 hour
          data: { user_id: user._id, email },
        },
        process.env.TOKEN_KEY as string
      );

      // save user token
      user.token = token;
      await user.save();

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

export default app;
