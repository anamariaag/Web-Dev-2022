import express from "express";
import chalk from "chalk";
import * as fs from "node:fs";
import cors from "cors";

//configuración inicial del servidor
const app = express();
const port = 3000;
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));


app.use(express.json());

app.get('/',(req,res)=>{
    console.log(chalk.blue("Esto es la práctica 3"));
    res.send('Raíz del sitio');
})
