
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

//EJERCICIO 2
//añadir nuevo elemento,
//función que copie los libros en orden inverso a otro nuevo arreglo
let libro0 = {
    id: 0, 
    autor: "Autor77",
    anio: 2006, 
    fecha: new Date(2006+"-01-01T12:00:00.0000Z")
};

arryLibros.unshift(libro0);

function inverseArry(nuevo, viejo){
    for(let j = viejo.length; j>0; j--){
    nuevo.push(viejo[j-1]);
    }  
}
let newArryLibros = [];
inverseArry(newArryLibros, arryLibros);




//EJERCICIO3
//copiar arreglo de libros
//función para eliminar libros
var librosCopy = newArryLibros.slice();

function eraseLibroIds(id, arry){
    if(id < 0){
        console.log("Id no encontrado");
    }else{
        delete arry[id];
        console.log("Id" + id + "eliminado");
    }
};


eraseLibroIds( 5, librosCopy);


console.table(arryLibros);
console.log("Libros en JSON: ", JSON.stringify(arryLibros));
console.log("++");
console.table(newArryLibros);
console.table(librosCopy);