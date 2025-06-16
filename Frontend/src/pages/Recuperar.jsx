import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Link } from "react-router-dom";

const Recuperar = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}recuperarpassword`;
      const response = await axios.post(url, data);
            toast.success(response.data.msg, {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      const mensaje = error.response?.data?.msg || "Error al enviar solicitud";
      toast.error(mensaje, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Recuperar Contraseña</h2>
        <p style={styles.subtitle}>Te enviaremos un enlace para restablecer tu contraseña</p>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", { required: true })}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>El correo es obligatorio</span>}

          <button type="submit" style={styles.button}>
            Enviar correo
          </button>
        </form>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          ¿Ya recordaste tu contraseña?{" "}
          <Link to="/login" style={{ color: "#4CAF50", fontWeight: "bold" }}>
            Volver al login
          </Link>
        </p>

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
};

export default Recuperar;
