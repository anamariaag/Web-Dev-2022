console.log("uno");

setTimeout(function timeout(){
    console.log("A");
},7000);

setTimeout(function timeout(){
    console.log("B");
},0);

setTimeout(function timeout(){
    console.log("C");
},2000);

setTimeout(function timeout(){
    console.log("D");
},1000);

console.log("End");

setTimeout(function timeout(){
    console.log("Hola");
},1000);
setTimeout(function timeout(){
    console.log("mundo");
},1000);

setTimeout(function timeout(){
    console.log("Hola");
},2000);
setTimeout(function timeout(){
    console.log("mundo");
},2000);

setTimeout(function timeout(){
    console.log("Hola");
},3000);
setTimeout(function timeout(){
    console.log("mundo");
},3000);

setTimeout(function timeout(){
    console.log("Hola");
},4000);
setTimeout(function timeout(){
    console.log("mundo");
},4000);

setTimeout(function timeout(){
    console.log("Hola");
},5000);


let promesa1 = new Promise(function (func_resolve, func_reject){
    setTimeout( () => {
        if(Math.random() < 0.5){
            console.log("Procesando la promesa");
            func_resolve("Correcto!");
        }else{
            func_reject(new Error("Algo falló"));
        }
    }, 1000);
});


promesa1.then(function exito(result){
    console.log(result);
}, function rechazo(error){
    console.log(error);
});


//promesa como return de funcion
function loadScript(src){
    return new Promise (function(resolve, reject){
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error: "+ src));
        document.head.append(script);
    });
}

let promesa2 = loadScript("https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-Y");
promesa2.then(
    script => alert(script.src + "cargada!"),
    error => alert("Error:" + error.message)
);
promesa2.then(script => alert("algo extra por hacer!"));


fase1()
.then(function(result){
    return fase2(result);
})
.then(function(newResult){
    return fase3(newResult);
})
.then(function (otherResult){
    return fase4(otherResult)
})
.then(function(finalResult){
    console.log('Resultado final promises '+ finalResult)
})
.catch(failureCallback);

