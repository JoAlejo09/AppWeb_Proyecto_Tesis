import Usuario from "../models/Usuario.js";

// Listar solo pacientes
const listarPacientes = async (req, res) => {
  const pacientes = await Usuario.find({ rol: "paciente" }).select("-password -token");
  res.status(200).json(pacientes);
};

const obtenerPaciente = async (req, res) => {
  const paciente = await Usuario.findOne({ _id: req.params.id, rol: "paciente" }).select("-password -token");
  if (!paciente) return res.status(404).json({ msg: "Paciente no encontrado" });
  res.json(paciente);
};

const actualizarPaciente = async (req, res) => {
  const paciente = await Usuario.findById(req.params.id);
  if (!paciente || paciente.rol !== "paciente") return res.status(404).json({ msg: "Paciente no encontrado" });

  const { nombre, apellido, email, telefono } = req.body;
  paciente.nombre = nombre || paciente.nombre;
  paciente.apellido = apellido || paciente.apellido;
  paciente.email = email || paciente.email;
  paciente.telefono = telefono || paciente.telefono;

  await paciente.save();
  res.status(200).json({ msg: "Datos del paciente actualizados" });
};

const cambiarPasswordPaciente = async (req, res) => {
  const { nuevoPassword } = req.body;
  const paciente = await Usuario.findById(req.params.id);
  if (!paciente || paciente.rol !== "paciente") return res.status(404).json({ msg: "Paciente no encontrado" });

  paciente.password = await paciente.encrypPassword(nuevoPassword);
  await paciente.save();
  res.status(200).json({ msg: "Contraseña actualizada correctamente" });
};

const desactivarPaciente = async (req, res) => {
  const paciente = await Usuario.findById(req.params.id);
  if (!paciente || paciente.rol !== "paciente") return res.status(404).json({ msg: "Paciente no encontrado" });

  paciente.activo = false;
  await paciente.save();
  res.status(200).json({ msg: "Paciente desactivado con éxito" });
};

const eliminarPaciente = async (req, res) => {
  const paciente = await Usuario.findById(req.params.id);
  if (!paciente || paciente.rol !== "paciente") return res.status(404).json({ msg: "Paciente no encontrado" });

  await paciente.deleteOne();
  res.status(200).json({ msg: "Paciente eliminado definitivamente" });
};

export {
  listarPacientes,
  obtenerPaciente,
  actualizarPaciente,
  cambiarPasswordPaciente,
  desactivarPaciente,
  eliminarPaciente
};
