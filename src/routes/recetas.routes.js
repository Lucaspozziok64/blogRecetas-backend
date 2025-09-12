import { Router } from "express";
import { borrarRecetaPorId, crearReceta, editarRecetaPorId, leerRecetaPorId, leerRecetas } from "../controllers/recetas.controllers.js";
import validacionRecetas from "../middlewares/validarRecetas.js";
import verificarJWT from "../middlewares/verificarJWT.js";

const router = new Router()

router.route('/').get(leerRecetas).post([verificarJWT, validacionRecetas], crearReceta)
router.route('/:id').get(leerRecetaPorId).delete(verificarJWT, borrarRecetaPorId).put([verificarJWT, validacionRecetas], editarRecetaPorId)

export default router;