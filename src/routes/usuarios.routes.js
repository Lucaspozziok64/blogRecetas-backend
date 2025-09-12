import { Router } from "express";
import { crearUsuario, leerUsuarios, login } from "../controllers/usuario.controllers.js";
import validacionUsuarios from "../middlewares/validarUsuarios.js";

const router = new Router();

router.route('/').get(leerUsuarios).post(validacionUsuarios, crearUsuario)
router.route('/login').post(login)

export default router;