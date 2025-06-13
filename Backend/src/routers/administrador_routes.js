
import {Router} from 'express'
import {registro, activarCuenta} from '../controllers/administrador_controller.js'

const router = Router()

router.post('/registro',registro)
router.get('/activar/:token', activarCuenta)






//router.get('/confirmar/:token', confirmarMail)

//router.post('/recuperarpassword',recuperarPassword)
//router.get('/recuperarpassword/:token',comprobarTokenPassword)
//router.post('/nuevopassword/:token',crearNuevoPassword)

export default router
