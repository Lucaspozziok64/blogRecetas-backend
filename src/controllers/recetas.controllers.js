import Receta from "../models/recetas.js";

export const leerRecetas = async (req, res) => {
  try {
    // 1 Aqui deberia buscar las recetas en la BD
    const listaRecetas = await Receta.find();

    // 2 Luego enviar respuesta si encontramos las recetas
    res.status(200).json(listaRecetas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al leer las recetas" });
  }
};
