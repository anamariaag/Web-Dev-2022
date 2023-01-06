import express from "express";
import chalk from "chalk";
import * as fs from "node:fs";
import asciicats from "ascii-cats";
import cors from "cors";


const app = express();
const port = 3000;


function printCat(req, res, next){
    console.log(asciicats());
    next();
}
app.use(printCat);

function usersMiddleware(req, res, next){
    console.log(chalk.blue("Método: ")+chalk.green(req.method));
    console.log(chalk.blue("URL: ")+chalk.green(req.originalUrl));
    console.log(chalk.blue("Fecha: ")+chalk.green(new Date(Date.now()).toString()));
    console.log(chalk.blue("Content-type: ")+chalk.green(req.get("Content-type")));
    next();
}
app.use(usersMiddleware);

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE','PUT', 'PATCH']
}));

app.get("/", (req, res) => {
    res.send("Raiz del sitio");
    console.log(chalk.blue("Entró a la raiz"));
});

app.get("/home", (req, res) => {
    res.send("Home del sitio");
    console.log(chalk.green("Entró a home"));
});
/*
app.get("/users", (req, res) => {
    let fileReadedCb = (error, data) => {
        if (error) console.log(error);
        console.log(chalk.green("Usuarios encontrados"));
        console.table(JSON.parse(data));
        res.send("Usuarios mostrados en consola");
    };

    console.log(chalk.yellow("Mostrando usuarios"));
    fs.readFile("./users.json", "utf8", fileReadedCb);
});*/

app.get("/users", (req, res) => {
    let auth = req.get('x-auth');
    if(auth){
        fs.readFile("users.json", "utf-8", function(error,data){
            if(error){
                console.log(error);
            }
            console.log(chalk.blue("Mostrando usuarios: "));
            console.table(JSON.parse(data));
            res.send(data);
        });
    }else{
        console.log(chalk.red("No autorizado"));
        res.sendStatus(401);
    }
});

app.listen(port, () => {
    console.log("Aplicación ejemplo corriendo en puerto " + port);
});

app.use("/users", printCat); 