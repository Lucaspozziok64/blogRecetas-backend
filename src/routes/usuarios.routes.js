import { Router } from "express";
import { crearUsuario, leerUsuarios } from "../controllers/usuario.controllers.js";

const router = new Router();

router.route('/').get(leerUsuarios).post(crearUsuario)

export default router;