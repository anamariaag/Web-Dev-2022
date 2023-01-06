//Valores por defecto a parametros
function fun_1 (variable_1 =5){
    console.log(variable_1);
    return variable_1+3;
}

let resultado = fun_1;
//let resultado2 = fun_2(10);


//prueba del scope
let v3 = 3;

function fun_2(v1= 1,v2=1 ){
    //v3_in = 5;
    return v1 + v2 + v3;
}

console.log("output fun_2: ", fun_2());


//FUNCION COMO VARIABLE
function showMessage(message){
    console.log(message);
}

let var_mensaje = showMessage;
var_mensaje('¡Hola!');              //ejecuta la función
console.log(var_mensaje);           //muestra el codigo de la funcion
console.log(typeof var_mensaje);    //"function"

//de otra forma
let var_mensaje_2 = function showMessage_2(message){
    console.log(message);
}

var_mensaje_2('¡Hola pitaya!');


//Callback
function createNewUser(id, user_name, storeData){
    if(id > 0 && id<1000){
        storeData(id,user_name);
    }
    else{
        console.log("Id incorrecto");
    }
}

function store(id, name){
    console.log("Guardado: \nID: ",id,"\nUsuario: ", name);
}

createNewUser(25, 'Dorx 1', store);
createNewUser(1001, 'Dorx 2',store);
createNewUser(10, 'Dorx 3', function(id, name){
    console.log("Guardado: \nID: ", id, "\nUsuario: ", name);
});

//TRADITIONAL FUNCTION
var traditionalFunction = function(){
    var part_1 = 'Hola',
    part_2 = 'Mundo';

    return part_1 + ' ' + part_2 + '!';
}

//First arrow function
var arrowFunction = () =>{
    var part_1 = 'Hola',
        part_2 = 'Mundo';
    return part_1 + ' ' + part_2 + '! ARROW';
}

//traditional function 3
var traditionalFunction3 = function(a,b){
    var c = a*b;
    a+b;
    return c;
}

var arrowFunction3 = (a,b) => (c = a*b, a+b, c);

