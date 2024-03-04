import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import HomeRoutes from "./routes/HomeRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import db from "./database/db.js";
import { hash } from "bcrypt";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8000; // Definir el puerto de esta manera

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para obtener todas las casas
// Ruta para obtener todas las casas

// app.get("/Home", async (req, res) => {
//   try {
//     // Obtener todas las casas desde la base de datos
//     const houses = await HomeModel.find();
   
//     // Responder con las casas obtenidas
//     res.json(houses);
//   } catch (error) {
//     // Si ocurre algún error, responder con un mensaje de error y código de estado 500
//     res.status(500).json({ message: error.message });

//   }
 
// });

// Rutas
app.use("/Home", HomeRoutes);
app.use("/Users", userRoutes);

// Puerto
app.listen(port, () => {
  console.log(`Server UP running on http://localhost:${port}/`);
});
