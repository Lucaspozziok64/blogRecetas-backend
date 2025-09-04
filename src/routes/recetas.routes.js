import { Router } from "express";
import { borrarRecetaPorId, crearReceta, leerRecetaPorId, leerRecetas } from "../controllers/recetas.controllers.js";

const router = new Router()

router.route('/').get(leerRecetas).post(crearReceta)
router.route('/:id').get(leerRecetaPorId).delete(borrarRecetaPorId)

export default router;