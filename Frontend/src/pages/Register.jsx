import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registrarUsuario = async (data) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}usuarios/registrar`;
      await axios.post(url, data);
      toast.success(res.data.msg || "Registro exitoso");
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      console.log("ERROR REGISTRO:", error); // 🐞 log para diagnóstico
      toast.error(error.response?.data?.msg || "Error en el registro");

    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <ToastContainer />

      {/* Formulario */}
      <div className="w-full sm:w-1/2 h-screen bg-white flex justify-center items-center">
        <div className="md:w-4/5 sm:w-full">
          <h1 className="text-3xl font-semibold mb-2 text-center uppercase text-gray-500">
            Bienvenido(a)
          </h1>
          <small className="text-gray-400 block my-4 text-sm">Por favor ingresa tus datos</small>

          <form onSubmit={handleSubmit(registrarUsuario)}>
            {/* Nombre */}
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                {...register("nombre", { required: "El nombre es obligatorio" })}
                placeholder="Tu nombre"
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-700"
              />
              {errors.nombre && <p className="text-red-600 text-sm">{errors.nombre.message}</p>}
            </div>

            {/* Apellido */}
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">Apellido</label>
              <input
                type="text"
                {...register("apellido", { required: "El apellido es obligatorio" })}
                placeholder="Tu apellido"
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-700"
              />
              {errors.apellido && <p className="text-red-600 text-sm">{errors.apellido.message}</p>}
            </div>

            {/* Correo */}
            <div className="mb-3">
              <label className="block text-sm font-semibold mb-1">Correo electrónico</label>
              <input
                type="email"
                {...register("email", { required: "El correo es obligatorio" })}
                placeholder="tucorreo@ejemplo.com"
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-700"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            {/* Contraseña */}
            <div className="mb-3 relative">
              <label className="block text-sm font-semibold mb-1">Contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "La contraseña es obligatoria" })}
                placeholder="********"
                className="block w-full rounded-md border border-gray-300 px-2 py-1 text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-700 pr-10"
              />
              {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}

              {/* Botón para mostrar/ocultar */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-7 right-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Botón enviar */}
            <button className="bg-purple-700 text-white w-full py-2 rounded-md mt-4 hover:bg-purple-900 transition">
              Registrarse
            </button>
          </form>

          {/* Separador */}
          <div className="mt-6 text-xs border-b-2 py-4"></div>

          {/* Enlace a login */}
          <div className="mt-3 text-sm flex justify-between items-center">
            <p>¿Ya tienes una cuenta?</p>
            <Link
              to="/login"
              className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-900 transition"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>

      {/* Imagen de fondo (oculta en móviles) */}
      <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/freemp.jpeg')] bg-no-repeat bg-cover bg-center sm:block hidden"></div>
    </div>
  );
};

export default Register;
