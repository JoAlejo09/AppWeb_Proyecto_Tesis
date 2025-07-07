import { Router } from "express";
import {
  listarPacientes,
  obtenerPaciente,
  actualizarPaciente,
  cambiarPasswordPaciente,
  desactivarPaciente,
  eliminarPaciente
} from "../controllers/admin_paciente_controller.js";
import { verificarTokenJWT } from "../middlewares/JWT.js";

const router = Router();

// Todas protegidas por JWT y solo accesibles a admins
router.use(verificarTokenJWT);

// Lista de pacientes
router.get("/", listarPacientes);

// Ver un paciente
router.get("/:id", obtenerPaciente);

// Actualizar datos personales
router.put("/:id", actualizarPaciente);

// Cambiar password del paciente
router.put("/password/:id", cambiarPasswordPaciente);

// Desactivar paciente (cambia activo a false)
router.patch("/desactivar/:id", desactivarPaciente);

// Eliminar completamente un paciente
router.delete("/:id", eliminarPaciente);

export default router;
