import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState(""); // nuevo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/usuarios/registrar", {
        nombre,
        apellido,
        email,
        password
      });
      setMsg(res.data.msg);
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      console.log("Error de registro:", error.response); // agrega esta línea
      setMsg(error.response?.data?.msg || "Error en el registro");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Registro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        <input
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          placeholder="Apellido"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded">Registrarse</button>
      </form>
      {msg && <p className="mt-2 text-sm">{msg}</p>}
    </div>
  );
};


export default Register;
