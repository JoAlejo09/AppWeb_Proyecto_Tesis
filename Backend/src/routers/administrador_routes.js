
import {Router} from 'express'
import {registro, activarCuenta, perfilAdmin} from '../controllers/administrador_controller.js'
import { verificarTokenJWT} from '../middlewares/JWT.js'

const router = Router()

router.post('/registro',registro)
router.get('/activar/:token', activarCuenta)
router.get('/perfil', verificarTokenJWT, (req,res,next)=>{
    if(req.usuario.rol !=='admin'){
        return res.status(403).json({
            msg:"Acceso denegado solo administradores"
        })
        next();
    }
},perfilAdmin);

export default router
