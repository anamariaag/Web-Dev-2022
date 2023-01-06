let obj1 = new Object();
let obj2 = {};

let alumno1 = {
    nombre:"Ana Maria",
    carrera: "ISC",
    "apellido paterno" : "Anaya"
}

console.log(alumno1);
console.log(alumno1.nombre);
console.log(alumno1["nombre"]);
console.log(alumno1["apellido paterno"]);

alumno1.promedio = 9.0;
console.log(alumno1.promedio);

delete alumno1.carrera;
console.log(alumno1);

let app_variable = "apellido paterno";
alumno1[app_variable] = "López";
console.log(alumno1["apellido paterno"]);


//FUNCION GENERADORA
function crearAlumno(nombre, carrera){
    return{
        nombre: nombre,
        carrera: carrera
    }
}

let alumno_creado_1 = crearAlumno("Raúl", "ISC");
console.log(alumno_creado_1);

function crearAlumno2(nombre,carrera){
    return{
        nombre,
        carrera
    }
}

let alumno_creado_2 = crearAlumno2("Valeria", "Derecho");
console.log(alumno_creado_2);


//CONSTRUCTORES
//COMO FUNCION
function Alumno(nombre, carrera){
    this.nombre = nombre;
    this.carrera = carrera;
}
let alumno_creado_3 = new Alumno("Cinthya", "Ing. Química");
console.log(alumno_creado_3);

//COMO CLASE
class AlumnoC{
    constructor(nombre,carrera){
        this.nombre = nombre;
        this.carrera = carrera;
    }
}

let alumno_creado_4 = new AlumnoC("Maria", "Psicología");
console.log(alumno_creado_4);


if(alumno1.carrera === undefined){
    console.log("El alumno no tiene carrera.")
}
if(!("carrera" in alumno1)){
    console.log("El alumno no tiene carrera.")
}

//recorrer las propiedades
for(let key in alumno1){
    console.log(key, ':', alumno1[key]);
}


//los valores son iguales, si modificas uno se modifica el otro
let alumno3 = alumno1;
alumno3.semestre = 6;
console.log(alumno1.semestre);
console.log(alumno3 == alumno1);        //true
console.log(alumno3 === alumno1);       //true
let alumno4 = {};
let alumno5 = {};

//aunque esten vacios, no son iguales
console.log(alumno4 == alumno5);        //false
console.log(alumno4 === alumno5);       //false



let alumno6 = {};
Object.assign(alumno6, alumno1);        //copia valores
console.log(alumno6);



//USO DE THIS
let student = {
    name: "Edith",
    age: 22,
    //showName: function ()
    showName(){
        console.log(this.name);
        //equivalente
        //console.log(student.name);
    }
};

student.showName();

let newS = student;
student = null;
//newS.showName(); es error pq no existe student

let student2 = {name: "Leonardo"};
function showName(){
    //console.log(this);//imprime todo el objeto
    console.log(this.name); //imprime solo el nombre
}

student2.newFn = showName;
student2.newFn();
student2['newFn']();


//GETTERS Y SETTERS

let alumno = {
    nombre: "Juan",
    calificacion: 9.8,
    get reporte(){
        return this.nombre + "->" + (this.calificacion >= 6? "Aprobado" : "Reprobado");
    },
    set reporte(valores){
        let [nom, cal] = valores.split(" ");
        this.nombre = nom;
        this.calificacion = cal; 
    }
}

console.log(alumno.reporte);        //Juan -> aprobado
alumno.reporte = "Marco 5.5";
console.log(alumno.reporte);        // Marco -> reprobado








//EJERCICIO 

//PARTE 1

//creación objeto
let celular_1 = {
    marca: "Apple",
    modelo: "iPhone 13",
    anio: 2021,
    precio: 30_000,
    venta: true
}
console.log(celular_1);

//función generadora
function crearCelular(marca, modelo, anio, precio, venta){
    return{
        marca, 
        modelo, 
        anio,
        precio,
        venta
    }
}

let celular_2 = crearCelular("Nokia", "G50", 2019, 20_000, false);
console.log(celular_2);

//como clase
class Celular{
    constructor(marca, modelo, anio, precio, venta){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.venta = venta
    }
}



let celular_3 = new Celular("Motorola", "50", 2020, 10_000, true);
console.log(celular_3);

//funcion muestre propiedades obj celuar que reciba

function propiedadesCelular(celular){
    for(let key in celular){
        console.log(key, ':', celular[key]);
    }
}

propiedadesCelular(celular_1);

//funcion reciba obj celular y una propiedad, determine que tiene esa propiedad
function existePropiedad(celular, prop){
    if(celular[prop] == undefined){
        console.log("La propiedad", prop,"no existe.");
    }
    else{
        console.log("La propiedad ", prop," es ", celular[prop]);
    }
}

existePropiedad(celular_3, "marca");
existePropiedad(celular_3, "tamanio");

//agregar getter que regrese marca del celular
class Celular2{
    constructor(marca, modelo, anio, precio, venta){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.venta = venta
    }
    get getMarca(){
        return (this.marca + " " + this.modelo);
    }
    set ramProc(valores){
        let[ram,proc] = valores.split(" ");
        this.ram = ram;
        this.proc = proc;
    }
}

let celular_4 = new Celular2("Motorola", "50", 2020, 10_000, true);
celular_4.ramProc("4gb iCore5");
console.log(celular_4.getMarca);


//agregar setter para insertar la memoria ram y el procesador si los ingresa como string separados








