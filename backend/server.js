//archivos de ejecución
const express=require('express');
const cors = require('cors');
const app=express();

//orden archivos de ejecución, cors, env, express.json, rutas, server 
//dotenv
const env=require('dotenv');
env.config();

//cors 
app.use(cors({ 
    origin:"*",
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));
//express.json
app.use(express.json());

//ruta
const ReservaRouter = require('./router/reservaRouter');
const usuarioRoutes = require("./router/usuarioRouter");
app.use('/apir',ReservaRouter);
app.use('/apiu',usuarioRoutes);

//server 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Servidor en el puerto:',PORT);
})