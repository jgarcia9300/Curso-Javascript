
// const NAME = Symbol("Nombre");
// const APELLIDO = Symbol("Apellido");

// const persona = {
//     [NAME]: 'Juan'
// }

// persona.NAME = "Juan Manuel Garcia"
// persona.EDAD = "23"

// persona[APELLIDO] = () => {
//     console.log("Garcia Garcia")
// }

// // console.log[persona[APELLIDO]()]

// for (const key in persona) {
//     if (Object.hasOwnProperty.call(persona, key)) {
//         console.log(persona[key]);
//     }
// }

// console.log(Object.getOwnPropertySymbols(persona))

//SET

// const set = new Set ([1,2,3,4,5,3,3, true, false, {}, "hola"])


// const set2 = new Set();

// set2.add("hola")
// set2.add("hola")
// set2.add("hola")
// set2.add("mundo")
// set2.add("garcia")
// set2.add(1)

// //RECORRIENDO SET

// for (elemento of set2) {
//     console.log(elemento);
// }

// //RECORRIENDO SET 2

// set2.forEach(elemento => console.log(elemento))

// const array = Array.from(set2)

// console.log(set2);

// set2.delete("hola")

// console.log(set2.has("mundo"));

// set2.clear()

// console.log(set2);


// const mapa = new Map();

// mapa.set("nombre", "juan")
// mapa.set("apellido", "garcia")
// mapa.set("edad", "30")
// mapa.set("ciudad", "cali")

// mapa.set("nombre", "Ada")
// mapa.delete("nombre")
// console.log(mapa) 
// mapa.set(19, "Diecinueve")

// for (let [key, values] of mapa) {
//     console.log(`La clave es ${key} y su valor es ${values}`)
// }

// const mapa2 = new Map ([
//     ["nombre","kenai"],
//     ["edad",7],
//     ["animal", "perro"],
//     ["null", "nulo"]
// ]
// )

// const llavesMapa2 = [...mapa2.keys()]
// const valoresMapa2 = [...mapa2.values()]

// console.log(llavesMapa2)
// console.log(valoresMapa2)

// const ws = new WeakSet();

// let valor1 = {"valor1":1};
// let valor2 = {"valor2":2};
// let valor3 = {"valor3":2};

// ws.add(valor1);
// ws.add(valor2)

// console.log(ws);


// setInterval(() => console.log(ws), 1000);

// setTimeout(() => {
//     valor1 = null;
//     valor2 = null;
// }, 5000);

// const wm = new WeakMap();
//     let llave1 = {};
//     let llave2 = {};
//     let llave3 = {};

// wm.set(llave1, 1)
// wm.set(llave2, 2)
// wm.set(llave3, 3)

// console.log(wm.get(llave1))
// console.log(wm.get(llave2))

// wm.delete(llave2)

// console.log(wm.has(llave2))

// setInterval(() => console.log(wm), 1000);


// setTimeout(() => {
//     llave1 = null;
//     llave3 = null;
// }, 5000);
  


// const iterable = new Set([1,2,3,4,5,6,6,6]);
// // const iterable = "Hola Mundo";

// //Accedemos al iterador del iterable
// const iterador = iterable[Symbol.iterator]();

// console.log(iterador)

// let next = iterador.next()

// while(!next.done){
//    console.log(next.value)
//    next = iterador.next()
// }


//GENERADORES

// function* iterable () {
//    yield "hola";
//    console.log("Hola Consola");
//    yield "hola2";
//    console.log("Seguimos con mas instrucciones de nuestro codigo");
//    yield "hola3";
//    yield "hola4";
// }

// let iterador = iterable();

// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())
// console.log(iterador.next())


// for (let y of iterador) {
//    console.log(y);
// }

// const arr = [...iterable()];

// console.log(arr)

// function cuadrado (valor) {
//    setTimeout(() => {
//        return console.log({valor, resultado: valor*valor})
//    }, Math.random()*1000);

// }

// function* generador() {
//    console.log("Inicia Generator")
//    yield cuadrado(0);
//    yield cuadrado(1);
//    yield cuadrado(2);
//    yield cuadrado(3);
//    yield cuadrado(4);
//    yield cuadrado(5);
//    console.log("Final Generator")
// }

// let gen = generador();

// for (let y of gen) {
//    console.log(y)
// }

//Proxy

// const persona = {
//    nombre:"",
//    apellido:"",
//    edad:0,
// }

// const manejador = {
//    set(obj,prop,valor) {
//       if(Object.keys(obj).indexOf(prop) === -1){
//          return console.error(`La propiedad ${prop} no existe en el objeto persona`)
//       }
//       obj[prop] = valor
//    }
// }

// const jon = new Proxy(persona, manejador);

// jon.nombre = "Jon";

// jon.apellido = "Mircha"

// jon.edad = 35

// jon.twitter = "@jon"

// console.log(jon)

// console.log(persona)

//CALL, APPLY, BIND

// this.lugar = "Contexto global";


// function saludar(saludo, aQuien){
//    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
// }

// saludar();

// const obj = {
//    lugar: "Contexto Objeto"
// };

// saludar.call(obj, "Hola", "Jon");
// saludar.call(null, "Hola", "Jon");
// saludar.call(this, "Hola", "Jon");
// saludar.apply(obj, ["Adios", "Garcia"]);
// saludar.apply(null, ["Adios", "Garcia"]);
// saludar.apply(this, ["Adios", "Garcia"]);

// this.nombre="Window"

// const persona = {
//    nombre:"Juan",
//    saludar: function () {
//       console.log(`Hola ${this.nombre}`)
//    }
// }

// persona.saludar();

// const otraPersona = {
//    saludar:persona.saludar.bind(this)
// }

// otraPersona.saludar()

//JSON

const json = {
   cadena:"Jon",
   numero:35,
   booleano: true,
   arreglo: ["correr", "programar", "cocinar"],
   objeto: {
      twitter: "@jonmircha",
      email: "jonmircha@gmail.com"
   },
   nulo:null
}

//Parse convierte a objetos de javascript. Stringify convierte a cadena de texto o notacion JSON

console.log(json)

console.log(JSON.parse("{}"))

console.log(JSON.parse("[1,2,3]"))

console.log(JSON.stringify({}))

console.log(JSON.stringify([1,2,3]))

console.log(JSON.stringify(json))