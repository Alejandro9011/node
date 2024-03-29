import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// Función para registrar un nuevo usuario
export const registerUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Crear un nuevo usuario
    const newUser = new User({ name, password, email });
    const userCreate = await newUser.save();
    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario" });
  }
};

// Función para iniciar sesión
export const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Verificar si el usuario existe en la base de datos
    const existingUser = await User.findOne({ name });
    if (!existingUser) {
      return res.status(400).json({ message: "El usuario no existe" });
    }

    // Verificar la contraseña
    const isPasswordCorrect = existingUser.password === password;
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Generar el token de autenticación utilizando jwt
    const token = jwt.sign(
      { userId: existingUser._id, username: existingUser.name },
      "secreto_del_token" // Reemplaza con tu secreto para el token
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};
