
let calificaciones = [
    [8,7,9,4,6],
    [10,9,8,7,6],
    [10,10,10,9,9],
    [6,6,7,6,8],
    [9,8,7,9,9],
];


let fnAprobado = function fnAprobado(grupo, promedio){
    console.log("El grupo ", grupo,
    " aprobó con un promedio de ", promedio);
}

let fnReprobado = function fcReprobado(grupo, promedio){
    console.log("El grupo ", grupo,
    " reprobó con un promedio de ", promedio);
}

let getPromedio = function getPromedio(arrayInt){
    let i = 0,
        suma = 0;
    for(i=0;i<arrayInt.length;i++){
        suma += arrayInt[i];
    }
    return suma/arrayInt.length;
}

function getCalificaciones(calif, fnApr, fnRepr, getP) {
    let i = 0,
        promedioF=0;
    for(i=0;i<calif.length;i++){
        promedioF=getP(calif[i]);
        if(promedioF>=6){
            fnApr(i,promedioF)
        }
        else if(promedioF<6){
            fnRepr(i,promedioF)
        }
    }
    console.log("¡Calificaciones calculadas!")
}

console.log(calificaciones);
for(let i=0; i<calificaciones.length; i++){
    console.log(i, calificaciones[i]);
}
console.log("length: ", calificaciones.length);
getCalificaciones(calificaciones,fnAprobado,fnReprobado,getPromedio);
