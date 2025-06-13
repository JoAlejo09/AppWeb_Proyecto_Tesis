import Usuario from "../models/Usuario.js"
import {sendMailToActiveAccount, sendMailToRecoveryPassword} from "../config/nodemailer.js"

const login = async (req,res)=>{
    const {email,password,rol} = req.body
    //Validacion campos formulario vacio
    if(Object.values(req.body).includes("")){
        return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    }
    const usuarioBDD = await Usuario.findOne({email});

    //Validacion si existe el usuario
    if(!usuarioBDD) {
        return res.status(400).json({msg:"Usuario No Registrado. Registrese..."});
    }
    //Validacion de la contraseña
    const validPassword = await usuarioBDD.matchPassword(password);
    if (!validPassword) return res.status(401).json({ msg: "Contraseña incorrecta" });

    //Valida que el rol sea el correcto para el usuario
    if(!rol === usuarioBDD.rol) return res.status(401).json({msg:"El usuario no tiene permiso para ese perfil...."})
    
    //Validacion por cada rol
    if(usuarioBDD.rol === "admin"){
        //Validacion si la cuenta no ha sido activada
        if(!usuarioBDD.confirmEmail){
            const token = usuarioBDD.crearToken();
            usuarioBDD.token = token
            await usuarioBDD.save();
            await sendMailToActiveAccount(email,token);
            return res.status(401).json({
                msg:"Tu cuenta no esta activa. Revisa tu correo para activarla"
            });
        } else{
            usuarioBDD.activo = true;
            return res.status(200).json({
                msg:"Usuario Registrado Bienvenido"
            });
        }       
    }else{
            //CODIGO PARA PACIENTE 
    }
    await usuarioBDD.save()

}
const recuperarPassword = async(req,res)=>{
    const {email} = req.body
    if (Object.values(req.body).includes("")) {
        return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    }
    const usuarioBDD = await Usuario.findOne({email})
    if(!usuarioBDD) {
        return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    }
    const token = usuarioBDD.crearToken()
    usuarioBDD.token = token
    await sendMailToRecoveryPassword(email,token)
    await usuarioBDD.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para reestablecer tu cuenta"})
}

export{
    login,
    recuperarPassword
}