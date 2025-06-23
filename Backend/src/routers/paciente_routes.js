import { Router } from 'express';
//import { perfilPaciente } from '../controllers/paciente_controller.js';
//import { verificarTokenJWT } from '../middlewares/JWT.js';

const router = Router();

// Ruta protegida solo para pacientes
/*router.get('/perfil', verificarTokenJWT, (req, res, next) => {
  if (req.usuario.rol !== 'paciente') {
    return res.status(403).json({ msg: 'Acceso denegado: solo pacientes' });
  }
  next();
}, perfilPaciente);*/

export default router;
