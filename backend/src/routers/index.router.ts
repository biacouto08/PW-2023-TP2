import { Router } from "express"

import { get, login, patch } from "@/controllers/profile"
import { ensureAuthenticated } from "@/middlewares/authentication/ensureAuthenticated"

const router = Router()

router.get("/perfil", get)
router.patch("/perfil", ensureAuthenticated, patch)
router.post("/login", login)

export { router }
