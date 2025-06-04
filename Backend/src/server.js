import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routerAdministrador from './routers/administrador_routes.js'
const app = express()
dotenv.config()

app.set('port',process.env.port || 3000)
app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server on")
})

app.use('/api',routerAdministrador)

app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

export default app