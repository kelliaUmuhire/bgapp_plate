import express from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUser,
  signIn,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUser);

router.post("/signup", addUser);

router.patch("/:id", verifyToken, updateUser);

router.post("/signin", signIn);

router.delete("/:id", verifyToken, deleteUser);

export default router;
