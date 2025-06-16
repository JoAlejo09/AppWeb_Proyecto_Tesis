import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Bienvenido a <span style={styles.brand}>MentalAPP</span></h1>
        <p style={styles.subtitle}>Tu espacio para el bienestar mental</p>
        <div style={styles.buttonContainer}>
          <button style={styles.loginButton} onClick={() => navigate("/login")}>
            Iniciar sesión
          </button>
          <button style={styles.registerButton} onClick={() => navigate("/registro")}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #e0f7fa, #e1bee7)",
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
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  brand: {
    color: "#7e57c2",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  loginButton: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  registerButton: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Main;
