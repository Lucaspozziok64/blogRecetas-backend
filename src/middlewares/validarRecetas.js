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
  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|webp)/)
    .withMessage(
      "La imagen debe ser una URL valida y debe terminar en .jpg, .jpeg, .png o .wep"
    ),
  body("categoria")
    .notEmpty()
    .withMessage("La categoria es un dato obligatorio")
    .isIn(["Dulce", "Comida", "Pasteles", "Salado"])
    .withMessage(
      "La categoria debe ser una de las siguientes opciones: Dulce, Comida, Pasteles, Salado"
    ),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripcion es obligatoria")
    .isLength({ min: 10, max: 300 })
    .withMessage("La descripcion debe tener entre 10 y 300 caracteres"),
  body("pasos")
    .notEmpty()
    .withMessage("Los pasos de la receta es obligatorio")
    .isLength({ min: 15, max: 500 })
    .withMessage(
      "Los pasos de la receta debe tener entre 15 y 500 caracteres"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionRecetas;
