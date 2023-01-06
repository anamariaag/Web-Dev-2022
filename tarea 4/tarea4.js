//EJERCICIO 1
//Arreglo de libros, declarandolo en for
let arryLibros=[];
for(let i = 0; i < 10; i++){
    let libro ={
        id: i + 1,
        autor: "Autor"+ Math.floor(Math.random()*100),
        anio: 2000 + Math.floor(Math.random()*20),
        fecha: ''
    }
    libro.fecha = new Date(libro.anio+"-01-01T12:00:00.0000Z");
    arryLibros.push(libro);
}

//mostrar tabla en consola, convertir a JSON e imprimir
console.table(arryLibros);
console.log("Libros en JSON: ", JSON.stringify(arryLibros));



//EJERCICIO 2
//añadir nuevo elemento,
//función que copie los libros en orden inverso a otro nuevo arreglo y deje vacío el original
let libro0 = {
    id: 0, 
    autor: "Autor77",
    anio: 2006, 
    fecha: new Date(2006+"-01-01T12:00:00.0000Z")
};

arryLibros.unshift(libro0);

function inverseArry(nuevo, viejo){
    for(let j = viejo.length; j > 0; j--){
    nuevo.push(viejo.pop());
    }  
}
let newArryLibros = [];
inverseArry(newArryLibros, arryLibros);

console.log("Arreglo vacío: ")
console.table(arryLibros);
console.log("Arreglo al revez: ")
console.table(newArryLibros);




//EJERCICIO 3
//copiar arreglo de libros
//función para eliminar libros
var librosCopy = newArryLibros.slice();

function eraseLibroId(id, arry){
    if(id < 0){
        console.log("Id no encontrado");
    }else{
        delete arry[id];
        console.log("Id " + id + " eliminado");
    }
};

eraseLibroId( 5, librosCopy);
console.log("Libros sin eliminado: ");
console.table(librosCopy);

//función que reciba año y regrese los libros de un año menor o igual
function consultLibroYear(year, arry){
    let librosConsultados = [];
    for(let i = 0; i < arry.length; i++){
        if(arry[i].anio == year || arry[i].anio == year-1){
            librosConsultados.push(arry[i]);
        }

    }
    if(librosConsultados.length == 0){
        console.log("No se encontraron libros de ese año.")
    }else{
        console.log("Los libros del año "+ year + " o " + (year-1) +" son: ")
        console.table(librosConsultados);
    }
};

//prueba función
consultLibroYear(2005, newArryLibros);




//EJERCICIO 4
//arreglo 20 libros, con clave(100-999) y num palabras (1,000-100,000)
let arryLibros2=[];
for(let i = 0; i < 20; i++){
    let libro ={
        id: i + 1,
        autor: "Autor"+ Math.floor(Math.random()*100),
        anio: 2000 + Math.floor(Math.random()*20),
        fecha: '',
        clave: (Math.floor(Math.random() * (899)) + 100),
        numPalabras: (Math.floor(Math.random() * (99000)) + 1000)
    }
    libro.fecha = new Date(libro.anio+"-01-01T12:00:00.0000Z");
    arryLibros2.push(libro);
}

//mostrar tabla en consola
console.log("Segundo arreglo con 20 libros, más clave y número de palabras: ")
console.table(arryLibros2);

//crear nuevo libro y añadir en pos 7
let libro ={
    id:  21,
    autor: "Autor"+ Math.floor(Math.random()*100),
    anio: 2000 + Math.floor(Math.random()*20),
    fecha: '',
    clave: (Math.floor(Math.random() * (899)) + 100),
    numPalabras: (Math.floor(Math.random() * (99000)) + 1000)
}
libro.fecha = new Date(libro.anio+"-01-01T12:00:00.0000Z");

arryLibros2.splice(7, 0, libro);
console.log("Arreglo con elemento añadido en pos 7: ")
console.table(arryLibros2);


//ordenar los libros por clave
arryLibros2.sort(function(a, b){
    if(a.clave > b.clave){
        return 1;
    }if(a.clave < b.clave){
        return -1;
    }
    return 0;
});
console.log("Libros ordenados por clave: ")
console.table(arryLibros2);

//funcion con opciones, TOT, PRO, MAX, MIN
function totPalabras(arry){
    let sum = 0;
    for(let i = 0; i < arry.length; i++){
        sum += arry[i].numPalabras;
    };
    return sum;
}

function proPalabras(arry){
    let sum = 0;
    for(let i = 0; i < arry.length; i++){
        sum += arry[i].numPalabras;
    };
    return Math.floor(sum/arry.length);
}

function maxPalabras(arry){
    let max = arry[0].numPalabras;
    let clave;
    for(let i = 0; i < arry.length; i++){
        if(arry[i].numPalabras > max){
            max = arry[i].numPalabras;
            clave = arry[i].clave;
        }
    };
    console.log("El libro con mayor num. de palabras: clave "+ clave +" - num. palabras "+ max);
}
function minPalabras(arry){
    let min = arry[0].numPalabras;
    let clave = 0;
    for(let i = 0; i < arry.length; i++){
        if(arry[i].numPalabras < min){
            min = arry[i].numPalabras;
            clave = arry[i].clave;
        }
    };
    console.log("El libro con menor num. de palabras: clave "+ clave +" - num. palabras "+ min);
}

function opcLibros(opc, arry){
    switch(opc){
        case "TOT":
            console.log("El total de palabras es: "+ totPalabras(arry));
            break;
        case "PRO":
            console.log("El promedio de palabras es: "+ proPalabras(arry));
            break;
        case "MAX":
            maxPalabras(arry);
            break;
        case "MIN":
            minPalabras(arry);
            break;
    }
}

//prueba con 4 opciones
opcLibros("TOT", arryLibros2);
opcLibros("PRO", arryLibros2);
opcLibros("MAX", arryLibros2);
opcLibros("MIN", arryLibros2);