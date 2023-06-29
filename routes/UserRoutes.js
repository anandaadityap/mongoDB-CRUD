import express from "express";
import {
  getUsers,
  getUsersById,
  saveUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/user", getUsers);
router.get("/user/:id", getUsersById);
router.post("/user", saveUser);

export default router;
