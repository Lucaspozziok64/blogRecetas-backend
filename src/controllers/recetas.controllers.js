import { json } from "express";
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

export const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body)
    await nuevaReceta.save()

    res.status(201).json({ mensaje: 'La receta fue creada exitosamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al crear las recetas' })
  }
}

export const leerRecetaPorId = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id)
    if(!recetaBuscada) {
      return res.status(404).json({ mensaje: 'Receta no encontrada' })
    }
    res.status(200).json(recetaBuscada)
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al leer la receta' })
  }
}

export const borrarRecetaPorId = async (req, res) => {
  try {
    const recetaEliminada = await Receta.findByIdAndDelete(req.params.id, req.body)

    if(!recetaEliminada) {
      return res.status(404).json({ mensaje: 'Receta no encontrada' })
    }
    res.status(200).json({ mensaje: 'Receta eliminada exitosamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ mensaje: 'Error al eliminar la receta' })
  }
}