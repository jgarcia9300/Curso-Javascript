// valor = 3000
// setTimeout(() => {
//     console.log("esto se ejecuta una vez")
// }, valor);

// setInterval(() => {
//     console.log("Esto se repetira varias veces")
// }, 2000);

// let temporizador = setInterval(() => {
//     console.log(new Date().toLocaleTimeString())
// }, 1000);

// clearTimeout(temporizador)



/* Codigo sincrono no Bloqueante */
// (() => {
//  console.log("Codigo sincrono");
//  console.log("Inicio")

// function dos () {
//     console.log("Dos")
// }

// function uno () {
//     console.log("Uno")
//     dos();
//     console.log("tres")
// }

// uno();
// console.log("Fin")
// })() 
 

/** Codigo Asincrono no Bloqueante */

// (() => {
//     console.log("codigo asincrono")
//     console.log("Inicio")

//     function dos() {
//         setTimeout(function () {
//             console.log("Dos")
//         },1000);
//     }

//     function uno() {
//         setTimeout(function () {
//             console.log("Uno")
//         },0);
//         dos();
//         console.log("Tres")
//     }

//     uno();
//     console.log("Fin")

// })() 
 


/** Callbacks */

// function cuadradoCallback (value, callback) {

//     setTimeout(() => {
//         callback(value, value * value )
//     }, 0 | Math.random() * 100);


// }

// cuadradoCallback(10, (value, result) => {
//   console.log("Inicia callback"); 
//   console.log(`Callback: ${value}, ${result}`);
//     cuadradoCallback(3, (value, result) => {

//     console.log(`Callback: ${value}, ${result}`);
//     })
// })

//Promesas
// function cuadradoPromise(value) {

//     if (typeof value !== "number"){ 
//         return Promise.reject(`Error, el valor '${value} ingresado no es un numero'`)}

//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve( {
//                 value,
//                 result: value * value
//             })
          
//         }, 0 | Math.random() * 100);    

//     })


// }


// cuadradoPromise(100)
// .then(obj=>{
//     // console.log(obj)  
//     console.log("Inicio Promise")
//     console.log(`Promise: ${obj.value}, ${obj.result}`)
//     return cuadradoPromise(5)
// })
// .then((obj)=>{
//     console.log(`Continuacion de la promise: ${obj.value}, ${obj.result}`)
// })
// .catch(err => console.error(err));


   //Funcion Asincrona

//    async function funcionAsincronaDeclarada() {
//     try {
//         console.log("Inicio Async Function"); 

//         let obj = await cuadradoPromise(5);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
       

//         obj = await cuadradoPromise(1);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise("3");

//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise(4);

//         console.log(`Async Function: ${obj.value}, ${obj.result}`);


        
//         console.log("Fin Async Function");


//     } catch (err) {
//         console.error(err)
//     }
// }

// funcionAsincronaDeclarada()

//  const funcionAsincronaExpresada = async () => {
//     try {
//         console.log("Inicio Async Function"); 

//         let obj = await cuadradoPromise(5);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
       

//         obj = await cuadradoPromise(1);
//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         obj = await cuadradoPromise(7);

//         console.log(`Async Function: ${obj.value}, ${obj.result}`);
//         obj = await cuadradoPromise(4);

//         console.log(`Async Function: ${obj.value}, ${obj.result}`);

//         console.log("Fin Async Function");


//     } catch (err) {
//         console.error(err)
//     }
// }

// funcionAsincronaExpresada()