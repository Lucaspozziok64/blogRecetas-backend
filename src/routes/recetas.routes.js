import { Router } from "express";
import { leerRecetas } from "../controllers/recetas.controllers.js";

const router = new Router()

router.route('/').get(leerRecetas)

export default router;