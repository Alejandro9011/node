import express from "express";
import { registerUser, loginUser,GetAllUsers } from "../controllers/UserController.js";

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post("/register", registerUser);

// Ruta para iniciar sesión
router.post("/login", loginUser);
router.get("/user", GetAllUsers );

export default router;
