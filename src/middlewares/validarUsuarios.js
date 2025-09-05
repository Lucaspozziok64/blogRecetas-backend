import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuarios = [
  body("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({ min: 4, max: 50 })
    .withMessage("El nombre del usuario debe tener entre 4 y 50 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isEmail()
    .withMessage("El email debe tenerun formato valido"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es un dato obligatorio")
    .isLength({ min: 8, max: 100 })
    .matches(
      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/
    )
    .withMessage(
      "La contraseña debe contener al menos una letra mayuscula, un numero y un caracter especial"
    ),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuarios;
