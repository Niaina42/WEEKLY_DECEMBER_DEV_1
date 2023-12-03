import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/corrector"

const router = express.Router()

router.get("/dictionary", controller.getDictionary)
router.post("/", controller.getCorrection)

export default router