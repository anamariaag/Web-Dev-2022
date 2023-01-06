let url = "https://api.npoint.io/e8f98e9224bb5595ff5d";
let data = {var1: "Hola", var2: "Mundo"};

function guardarEnJSON(datos, urlJSON){
    let xhr = new XMLHttpRequest();

    xhr.open('POST', urlJSON);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send([JSON.stringify(datos)]);

    xhr.onload = function () {
        if(xhr.status != 200){
            alert(xhr.status + ': '+ xhr.statusText);
        }else{
            console.log("Guardado ", xhr.responseText);
        }
    };
}