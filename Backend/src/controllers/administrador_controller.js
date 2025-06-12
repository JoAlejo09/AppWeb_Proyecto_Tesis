import Administrador from "../models/Administrador.js"

/*import jwt from 'jsonwebtoken'
import {sendMailToActiveAccount,sendMailToRegister, sendMailToRecoveryPassword} from "../config/nodemailer.js"


const login = async (res,req)=>{
    const {email, password} = req.body

    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    
    const usuarioBDD = await Administrador.findOne({email});
    //Validacion si existe el usuario en la base de datos
    
    if(!usuarioBDD) return res.status(400).json({msg:"Usuario No Encontrado"});
    
    if (!usuarioBDD.confirmEmail){
        const token = usuarioBDD.crearToken();
        sendMailToActiveAccount(email,token);
        return res.status(401).json({
            msg:"Tu cuenta no esta activa. Revisa tu correo para activarla"
        });
    }

    const validPassword = await usuarioBDD.matchPassword(password);
    if (!validPassword) return res.status(401).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign(
        {id: usuarioBDD._id, email:usuarioBDD.email},
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    );
    
    res.json({ token, usuario: { email: usuario.email, nombre: usuario.nombre } });
}






const registro = async (req,res)=>{
    const {email,password} = req.body
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const verificarEmailBDD = await Administrador.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    const nuevoAdministrador = new Administrador(req.body)
    nuevoAdministrador.password = await nuevoAdministrador.encrypPassword(password)
    const token = nuevoAdministrador.crearToken()
    await sendMailToRegister(email,token)
    await nuevoAdministrador.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})
}
const confirmarMail = async (req,res)=>{
    const token = req.params.token
    const administradorBDD = await Administrador.findOne({token})
    if(!administradorBDD?.token) return res.status(404).json({msg:"La cuenta ya ha sido confirmada"})
    administradorBDD.token = null
    administradorBDD.confirmEmail=true
    await administradorBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 
}
const recuperarPassword = async(req,res)=>{
    const {email} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    const administradorBDD = await Administrador.findOne({email})
    if(!administradorBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    const token = administradorBDD.crearToken()
    administradorBDD.token = token
    await sendMailToRecoveryPassword(email,token)
    await administradorBDD.save()
    res.status(200).json({msg:"Revisa tu correo electrónico para reestablecer tu cuenta"})
}
const comprobarTokenPassword = async (req,res)=>{
    const {token} = req.params
    const administradorBDD = await Administrador.findOne({token})
    if(administradorBDD?.token !== req.params.token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    await administradorBDD.save()
    res.status(200).json({msg:"Token confirmado, ya puedes crear tu nuevo password"}) 
}
const crearNuevoPassword = async (req,res)=>{
    const {password, confirmpassword} = req.body
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    if(password != confirmpassword) return res.status(404).json({msg:"Lo sentimos, los passwords no coinciden"})  
    const administradorBDD = await Administrador.findOne({token:req.params.token})
    if(administradorBDD?.token !== req.params.token) return res.status(404).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    administradorBDD.token=null
    administradorBDD.password = await administradorBDD.encrypPassword(password)
    await administradorBDD.save()
    res.status(200).json({msg:"Felicitaciones, ya puedes iniciar sesión con tu nuevo password"}) 
}
export{
    registro,
    login,
    confirmarMail,
    recuperarPassword,
    comprobarTokenPassword,
    crearNuevoPassword
}*/