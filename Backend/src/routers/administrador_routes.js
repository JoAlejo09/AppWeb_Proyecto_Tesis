
import {Router} from 'express'
import {registro, activarCuenta, perfilAdmin} from '../controllers/administrador_controller.js'
import { verificarTokenJWT} from '../middlewares/JWT.js'

const router = Router()

router.post('/registro',registro)
router.get('/activar/:token', activarCuenta)
//Ruta para ver perfil del administrador
router.get('/perfil', verificarTokenJWT, (req,res,next)=>{
    if(req.usuario.rol !=='admin'){
        return res.status(403).json({
            msg:"Acceso denegado solo administradores"
        })
        next();
    }
},perfilAdmin);
//Ruta para Actualizar perfil del administrador
router.put('/perfil', verificarTokenJWT, (req, res, next)=>{
    if(req.usuario.rol !== 'admin')return res.status(403).json({ msg: 'Acceso denegado' });
    next();
}, perfilAdmin);
//Modificar contraseña administrador
router.put('/cambiar-password', verificarTokenJWT, (req, res, next) => {
  if (req.usuario.rol !== 'admin') return res.status(403).json({ msg: 'Acceso denegado' });
  next();
}, cambiarPasswordAdmin);

export default router
