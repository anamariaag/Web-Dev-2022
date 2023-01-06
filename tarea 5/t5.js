
//CALLBACKS
/*Se corren las funciones hasta que les toque, y a cada una se le 
pasa una palabra diferente con tiempo que van a esperar diferente
 y tambien las veces que la palabra se va a imprimir*/
function tarea1(palabra, tiempo, veces) {
    for (let i = 1; i <= veces; i++) {
        setTimeout(function timeout() {
            console.log(palabra + " " + i);
        }, tiempo * i * 1000);
    }
}

tarea1("Hola", 1, 10);
tarea1("Mundo", 2, 5);
tarea1("Fin", 10, 1);



//PROMISES
/* Se define la función muy parecido a la anterior, 
en este caso solo definimos la que pasaria en exito, no en el fracaso
y dejamos el for fuera de la función de promesa pero se pudo tambien
haber dejado adentro */
function tarea2(value, palabra, tiempo) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(palabra + " " + (value));
            resolve(value);
        }, 1000 * tiempo)
    })
}

for (let j = 1; j <= 10; j++) {
    tarea2(j, "Hola", j);
    if (j % 2 == 0) {
        tarea2(j / 2, "Mundo", j);
    }
}
tarea2(1,"Fin", 10);



//ASYNC/AWAIT
/* Se definió la función del delay y luego se uso para la asincrona, 
entonces el tiempo de espera se define en la de delay
y la de tarea 3 es igual que las dos anteriores. */
function delay(ms){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), ms);
    });
}

async function tarea3(veces, palabra, tiempo){
    for (let i = 1; i <= veces; i++) {
        let response = await delay(tiempo*1000);
        console.log(palabra + " " + i);
    }
    return Promise.resolve();
}

tarea3(10, "Hola", 1);
tarea3(5, "Mundo", 2.1);
tarea3(1, "Fin", 11);

