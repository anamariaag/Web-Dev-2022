import * as fs from 'node:fs';
import chalk from "chalk";
import express from 'express';

//utiliza objeto XMLHttpRequest para obtener información 
//de jsonplaceholder.typicode.com como lo hicimos antes
//muestra a los usuarios en consola

function ej1_pt1(){
    let llamada = new XMLHttpRequest();
    llamada.open('GET', "https://jsonplaceholder.typicode.com/users");
    llamada.send();
    llamada.onload = function (){
        if(llamada.status != 200){
            alert(llamada.status + ': '+ llamada.statusText);
        }else{
            //es 200 exitosa
            console.log("Usuarios: ");
            console.table(JSON.parse(llamada.responseText));
        }
    }
}
//solicita a un usuario por id específico
//si existe muestralo, concatena información de nombre y correo en un html
//si no existe muestra que no existe
function ej1_pt2(id){
    let llamada = new XMLHttpRequest();
    llamada.open('GET', "https://jsonplaceholder.typicode.com/users/" + id);
    llamada.send();
    llamada.onload = function (){
        if(llamada.status == 404){
            alert("Usuario no encontrado");
        }
        else if(llamada.status != 200){
            alert(llamada.status + ': ' + llamada.statusText);
        }
        else{
            console.log("Usuario encontrado!");
            let usuario = JSON.parse(llamada.responseText);
            let toPrint = "<b>Usuario: </b>"+ usuario.name + 
                            "<br> <b> Correo: </b>"+ usuario.email;
            //div con el id = test
            document.getElementById("test").innerHTML = toPrint;
        }
    }
}


//una función de JavaScript (showProducts) que lea los productos que tienes 
//en tu BD de JSON Server. Debe mostrar los productos en HTML cuando se 
//mande llamar (con un formato simple que prefieras).
function showProducts(){
    let call = new XMLHttpRequest();
    call.open('GET', "http://localhost:3000/products");
    call.send();
    call.onload = function(){
        if(call.status == 404){
            alert("No se encontro el producto.");
        }
        else if (call.status != 200 ){
            alert(llamada.status + ': ' + llamada.statusText);
        }
        else{
            console.log("Lista de productos");
            console.table(JSON.parse(call.responseText));
            let productos = JSON.parse(call.responseText);
            let toPrint = "";
            productos.forEach(element => {
                toPrint += "<b>Nombre: </b>" + element.name +
                "<br> <b>SKU: </b>" + element.sku +"<br><br>";
            });
            //Recuerda tener un "div" con id-test
            document.getElementById("test").innerHTML =toPrint;
        }
    }
}

//Crea una función (addProduct) que reciba de parámetro un objeto 
//"producto" y que lo añada a tu JSON "base de datos". 
//No pongas ID en el objeto, para que veas cómo se agrega solo. 


let newProduct = {
    "name": "NewProduct",
    "sku": "PROD-NEW",
    "price": 100
}

function addProduct(object){
    let call = new XMLHttpRequest();
    call.open('POST', "http://localhost:3000/products");
    call.setRequestHeader('Content-Type', 'application/json');
    call.send([JSON.stringify(object)]);
    call.onload = function (){
        if (call.status != 200){
            alert(call.status + ": " + call.statusText);
        } else{
            console.log("Guardado: ", call.responseText);
        }
    };
}

//Crea una función que muestre en otra parte de la página un producto 
//y su precio, filtrando por nombre utilizando queryParam 
function searchByName(nombre){
    let call = new XMLHttpRequest();
    call.open('GET', "http://localhost:3000/products?name="+ nombre);
    call.send();
    call.onload = function () {
        if (call.status == 404){
            alert("Producto no encontrado");
        }
        else if (call.status != 200){
            alert(call.status + ": "+ call.statusText);
        }
        else{
            console.log("¡Producto encontrado!");
            let prod = JSON.parse(call.responseText)[0];
            let toPrint = "<b>Producto buscado: </b>" + prod.name +
                        "<br> <b>Su precio es:  </b>" + prod.price;
            //"div" con id = test
            document.getElementById("test").innerHTML = toPrint; 
        }
    }
}




let fileReadedCb = function (error, data) {
    if(error){
        console.log(error);
    }
    console.log(data);
}
//fs.readFile('./testFile', 'utf8',fileReadedCb);

let fileReadedJSON = function (error, data) {
    if(error){
        console.table(error);
    }
    console.table(JSON.parse(data));
}

fs.readFile('./users.json', 'utf8',fileReadedJSON);




