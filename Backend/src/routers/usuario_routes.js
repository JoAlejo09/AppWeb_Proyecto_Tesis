import {Router} from 'express'
import {login, recuperarPassword} from '../controllers/usuario_controller.js'

const router = Router()

router.post('/login',login)
router.post('/recuperarpassword',recuperarPassword)

export default router
