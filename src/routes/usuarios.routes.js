import { Router } from "express";
import { leerUsuarios, test } from "../controllers/usuario.controllers.js";

const router = new Router();

router.route('/test').get(test)
router.route('/').get(leerUsuarios)

export default router;