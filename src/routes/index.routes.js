import { Router } from "express";
import recetasRoutes from "./recetas.routes.js"

const router = new Router()

router.use('/recetas', recetasRoutes)

export default router;