
function getInfo(elemento, atributo){
    console.log("ID: " + elemento.id);
    console.log(elemento.attributes);
    console.log("¿Existe "+ atributo + "?");
    console.log(elemento.hasAttribute(atributo));
}

function setInfo(elemento, atributo, valor){
    elemento.setAttribute(atributo, valor);
    console.log("Atributo agregado");
    console.log(elemento);
}