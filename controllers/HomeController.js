// importamos el Modelo
import HomeModel from "../models/HomeModel.js";

// Mostrar todos los cartas
export const GetAllHouse = async (req, res) => {
  try {
    const drons = await HomeModel.find();
    res.status(200).json(drons);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const GetHouse = async (req, res) => {
  try {
    const id = req.params.id;
    await HomeModel.findById({ _id: id }).then((house) => {
      res.status(200).json(house);
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Crear un carta
export const CreateHouse = async (req, res) => {
  try {
    await HomeModel.create(req.body);
    res.status(200).json({
      message: "¡ Creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Actualizar una carta
export const UpdateHouse = async (req, res) => {
  try {
    const id = req.params.id;
    await HomeModel.updateOne({ _id: id }, req.body).then((res) => {
      console.log(res);
    });
    res.status(200).json({
      message: "¡ Actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Eliminar una carta
export const DeleteHouse = async (req, res) => {
  try {
    const id = req.params.id;
    await HomeModel.deleteOne({ _id: id }).then((res) => {
      console.log(res);
    });
    res.status(200).json({
      message: "¡Eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
