import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Receta from "../models/recetas.js";

const validacionRecetas = [
  body("nombreReceta")
    .notEmpty()
    .withMessage("El nombre de la receta es obligatorio")
    .isLength({ min: 4, max: 100 })
    .withMessage("El nombre de la receta debe tener entre 4 y 100 caracteres")
    .custom(async (valor, { req }) => {
      const recetaExistente = await Receta.findOne({ nombreReceta: valor });
      //No existe ningun producto con el nombre 'valor'
      if (!recetaExistente) return true;
      //verificar si es un PUT, chequear si el id del productoExistente es el mismo que el producto que estoy editando
      if (req.params?.id && recetaExistente._id.toHexString() === req.params.id)
        return true;
      throw new Error("Ya existe una receta con ese nombre");
    }),
  body("primerPaso")
    .notEmpty()
    .withMessage("El primer paso de la receta es obligatorio")
    .isLength({ min: 8, max: 30 })
    .withMessage(
      "El primer paso de la receta debe tener entre 8 y 30 caracteres"
    ),
  body("segundoPaso")
    .optional()
    .isLength({ min: 8, max: 30 })
    .withMessage(
      "El segundo paso de la receta debe tener entre 8 y 30 caracteres"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionRecetas;
