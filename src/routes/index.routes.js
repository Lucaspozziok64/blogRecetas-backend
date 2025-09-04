import { Router } from "express";
import recetasRoutes from "./recetas.routes.js"
import usuariosRoutes from "./usuarios.routes.js"

const router = new Router()

router.use('/recetas', recetasRoutes)
router.use('/usuarios', usuariosRoutes)

export default router;