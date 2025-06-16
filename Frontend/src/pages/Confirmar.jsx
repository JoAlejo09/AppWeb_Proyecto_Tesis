import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Confirm = () => {
    const { token } = useParams();

    const verifyToken = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL_ADMIN}activar/${token}`;
            const respuesta = await axios.get(url);
            toast.success(respuesta?.data?.msg || "Cuenta confirmada con éxito");
        } catch (error) {
            toast.error(error?.response?.data?.msg || "Error al confirmar la cuenta");
        }
    };

    useEffect(() => {
        verifyToken();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ToastContainer />
            
            {/* Imagen decorativa opcional */}
            <img
                className="object-cover h-40 w-40 rounded-full border-4 border-solid border-slate-600"
                src="/images/logoDog.jpg"
                alt="Logo"
            />

            <div className="flex flex-col items-center justify-center mt-8 text-center">
                <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800">¡Gracias por confirmar tu cuenta!</p>
                <p className="md:text-lg lg:text-xl text-gray-600 mt-4">Ahora puedes iniciar sesión</p>

                {/* ✅ Link para ir a login */}
                <Link
                    to="/login"
                    className="p-3 mt-6 bg-gray-600 text-slate-100 rounded-xl hover:scale-105 hover:bg-gray-900 transition-all"
                >
                    Ir a Login
                </Link>
            </div>
        </div>
    );
};

export default Confirm;

