import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}login`;
      const response = await axios.post(url, data);

      toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 3000,
      });
      localStorage.setItem("usuario", JSON.stringify(response.data.usuario));
   // localStorage.setItem("token", response.data.token); // solo si usas JWT
      const rol = data.rol;
      if(rol === "admin"){
        navigate("/admin");
      }else if(rol ==="paciente"){
        //navigate ("/paciente");
      }
    } catch (error) {
      const mensaje = error.response?.data?.msg || "Error al iniciar sesión";
      toast.error(mensaje, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Inicio de Sesión</h2>
        <p style={styles.subtitle}>Selecciona tu rol e ingresa tus datos</p>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <select {...register("rol", { required: true })} style={styles.select}>
            <option value="admin">Administrador</option>
            <option value="paciente">Paciente</option>
          </select>

          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: true })}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>El correo es obligatorio</span>}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>La contraseña es obligatoria</span>}

          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>
        </form>

        <div style={{ marginTop: "15px" }}>
          <Link to="/recuperar" style={styles.forgotPassword}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #fce4ec, #e1f5fe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  error: {
    fontSize: "0.85rem",
    color: "red",
  },
  forgotPassword: {
    color: "#1976D2",
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;
