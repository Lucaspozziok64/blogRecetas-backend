import { Router } from "express";
import { borrarRecetaPorId, crearReceta, editarRecetaPorId, leerRecetaPorId, leerRecetas } from "../controllers/recetas.controllers.js";
import validacionRecetas from "../middlewares/validarRecetas.js";

const router = new Router()

router.route('/').get(leerRecetas).post(validacionRecetas, crearReceta)
router.route('/:id').get(leerRecetaPorId).delete(borrarRecetaPorId).put(validacionRecetas, editarRecetaPorId)

export default router;