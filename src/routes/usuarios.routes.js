import { Router } from "express";
import { crearUsuario, leerUsuarios, test } from "../controllers/usuario.controllers.js";

const router = new Router();

router.route('/test').get(test)
router.route('/').get(leerUsuarios).post(crearUsuario)

export default router;