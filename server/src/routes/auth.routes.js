// auth.routes.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { addUser, findUserByEmail } from "../models/user.model.js";
import logger from "../logger/index.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import conf from "../conf/conf.js";
import esClient from "../db/elasticsearch.js";

const router = express.Router();
const JWT_SECRET = conf.JWT_SECRET;

// Register User
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //   console.log({ name, email, password });

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    // console.log("User already exists");
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await addUser({ name, email, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully" });
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //   console.log({ email, password });

  const user = await findUserByEmail(email);
  //   console.log(user);

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email }, conf.JWT_SECRET, {
    expiresIn: "1h",
  });
  //   console.log({ token });

  res.json({ token, name: user.name });
});

// Protected Route: Get User Profile
router.get("/profile", authenticateToken, async (req, res) => {
  //   console.log(req.user);

  try {
    const result = await esClient.search({
      index: "users",
      query: { match: { email: req.user.email } },
    });

    if (result.hits.hits.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = result.hits.hits[0]._source;
    res.json({ name: user.name, email: user.email });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
