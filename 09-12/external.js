alert("Soy una alerta que esta por fuera!");


//DECLARACION DE VARIABLES
/* solo letras, digitos o los simbolos $ y _
No debe iniciar con números
evitar palabras reservadas*/

var x = 'test';

let y = 5;

//CONSTANTE
const z = y+5;


//IMPRESION EN CONSOLA
console.log("Z vale: ", z);

/*COMENTARIOS DE 
MUCHAS LINEAS*/


/* TIPOS DE DATOS:
NÚMEROS
CADENAS DE TEXTO
BOOLEANOS
ARREGLOS*/


let number = 3;

let string = 'Cadena 1';

let boolean = true;

let array = [1, 'texto', true, [2,false]];

let valueArray = array[3][0];

console.log('Ejemplo de número: ', number, typeof(number));
console.log('Ejemplo de cadena: ', string, typeof(string));
console.log('Ejemplo de booleano: ', boolean, typeof(boolean));
console.log('Ejemplo de arreglo: ', array, typeof(array));


function fun_1(array_1){
    let i = 0,
        s = 0;
    for(i=0;i<array_1.length;i++){
        s += array_1[i];
    }
    return s/array_1.length;
}

