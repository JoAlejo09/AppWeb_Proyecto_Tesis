import { Router } from 'express';
import {
  registro,
  activarCuenta,
  perfilAdmin,
  actualizarPerfilAdmin,
  cambiarPasswordAdmin
} from '../controllers/administrador_controller.js';
import { verificarTokenJWT } from '../middlewares/JWT.js';

const router = Router();

// Registro y activación de cuenta
router.post('/registro', registro);
router.get('/activar/:token', activarCuenta);

// Ver perfil del administrador
router.get('/perfil', verificarTokenJWT, (req, res, next) => {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ msg: 'Acceso denegado' });
  }
  next();
}, perfilAdmin);

// Actualizar perfil del administrador
router.put('/perfil/:id', verificarTokenJWT, (req, res, next) => {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ msg: 'Acceso denegado' });
  }
  next();
}, actualizarPerfilAdmin);

// Cambiar contraseña del administrador
router.put('/cambiarpassword/:id', verificarTokenJWT, (req, res, next) => {
  if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ msg: 'Acceso denegado' });
  }
  next();
}, cambiarPasswordAdmin);

export default router;
