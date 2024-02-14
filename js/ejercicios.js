
// const contador_caracteres = (texto)=>{
//     verificacion_string = typeof(texto)
//     if(verificacion_string !== "string" ){
//         console.log("Error, no es una cadena de texto")
//     } else {
//         console.log(`${texto.length}`)}
//     }
 
// contador_caracteres("111")

// const recortar_cadena = (texto,numero_caracteres) => {
//         verificacion_string = typeof(texto)
//     if(verificacion_string !== "string" ){
//         console.log("Error, no es una cadena de texto")
//     } else {
//         console.log(`${texto.slice(0,numero_caracteres)}`)}
//     }

// recortar_cadena("juan manuel", 8)

// juan = "texto escrito, por juan"

// const array_texto = (texto, caracter_division) => {
//     const array = texto.split(caracter_division);
//     console.log(array)
// }

// array_texto("Juan Manuel Garcia", " ")

// let texto_repetido =""



// const repetir_texto = (texto, numero_repeticiones) =>{

// for (let index = 0; index < numero_repeticiones; index++) {
//     texto_repetido += `${texto} `
// }

//     console.log(texto_repetido)
// } 

// repetir_texto("juan manuel", 100)

// const operador_ternario = (a) => (a!==0)
// ?console.warn("a es diferente de cero")
// :console.warn("a es cero")

// operador_ternario(12121)

/* ***********************************
EJERCICIO 1

*/
// const invertirPalabras = (texto="") => {
    
//     (!texto)
//     ? console.warn("No ha ingresado ningun texto")
//     :console.log(`El texto es "${texto.split('').reverse().join("")}"`)
// }

// invertirPalabras("Hola Mundo")

//EJERCICIO 2


// const contadorRepeticionTexto = (texto = "", buscarEnTexto) => {
//     let array = []
//     let sumarRepeticion = []
//     buscarEnTexto = RegExp(`${buscarEnTexto}`, 'g')
//     while((array = buscarEnTexto.exec(texto)) !== null){
//         console.log(`Encontro ${array[0]}, en la posicion ${buscarEnTexto.lastIndex}`);
    
//     sumarRepeticion += `${array[0]} `;
//     palabraBuscada = array[0] 
//     }

//     let divisionArray = sumarRepeticion.split(" ")
//     divisionArray.pop()
    

//     console.log(`La palabra o letra "${palabraBuscada} "se repite ${divisionArray.length} veces`)


// }

// contadorRepeticionTexto("juan juan juan garcia garcia", "juan")


// console.log(busqueda.exec(busqueda))

// const regex1 = RegExp('foo', 'g');
// const str1 = 'table football, foosball foo footbal ballfoo';
// let array1;

// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);

// }



//EJERCICIO 3

// let cadenaInvertida = ""
// const palindromo = (texto="") => {

//     if (!texto) {
//         return console.warn("No ha ingresado ningun texto")
//     }

//     cadenaInvertida = (texto.split('').reverse()).join("")

    
//     if (texto.toLowerCase().replace(/ /g, "") === cadenaInvertida.toLowerCase().replace(/ /g, "")) {
//         console.log("Es un palindromo")
     
//     }else{
        
//         console.log("No es un palindromo")
    
//     }

// }

// palindromo("la tele letal")

//EJERCICIO 4

// const patronCaracteres = (texto = "", patronAReemplazar = "") => {
   
//     if ((!texto) || typeof texto!=="string") {
//     return console.warn("No ha ingresado ningun texto o el tipo de dato es incorrecto")
//     }
 
//     if ((!patronAReemplazar) || typeof patronAReemplazar!=="string") {
//     return console.warn("No ha ingresado ningun patron a remplazar o el tipo de dato es incorrecto")
//     }

//     const primerReemplazo = texto.replace(new RegExp(patronAReemplazar,"ig"),"")
//     console.log(primerReemplazo)
// }

// patronCaracteres("Xyz1, xyz2, xyz3", "[0-9]")



//EJERCICIO 1


// const numeroAleatorio = () => {
//     console.log(Math.round(Math.random()*(600-501)+500))
// }

// numeroAleatorio()


// EJERCICIO 2

// const capicua = (number=0) => {
    
//     numeroATexto = number.toString();

//     invertirNumero = (numeroATexto.split('').reverse()).join("");

//     (numeroATexto !== invertirNumero)
//     ? console.log ("El numero no es capicua")
//     : console.log(`El numero ${number} es capicua`)


// }

// capicua("3003")
// factor=1;
 
// const factorial = (number = 0) => {
//     if (number===0) return console.log("El factorial de 0 es 1")

//     for (number; number > 1; number--) {
//         factor *= number;
//     }

//     console.log(factor)
// }

// factorial(3)
// do {
// factor = 0;
// anterior = number - 1;
// factor = number * anterior;
// number--;
// console.log(factor);
    
// } while (number>=1);
//     }

// const numeroPrimo = (number = undefined) => {

//   if (!number) return console.warn("No ha ingresado ningun numero");
//   if (typeof number !== "number") return console.error("No ha ingresado un numero valido");

//   divisor = number;
//   array = []

//   for (number; number > 0; number--) {
//     let numeroPrimo = (divisor % number);

//     array.push(numeroPrimo)
    
//   }

//   contador = 0;

//   for (let index = 0; index < array.length; index++) {
//     if (array[index]===0) contador += 1;
//   }

//    (contador === 2)
//    ?console.log(`El numero ${divisor} es primo`)
//    :console.log(`El numero ${divisor} no es primo`)
    
//   }

// numeroPrimo(22)

//     const numeroPrimo = (number = undefined) => {

//     if (!number) return console.warn("No ha ingresado ningun numero");
//     if (typeof number !== "number") return console.error("No ha ingresado un numero valido");
  
//     divisor = number;
//     contador = 0;
  
//     for (number; number > 0; number--) {
//       let numeroPrimo = divisor % number;
//       if (numeroPrimo === 0) contador += 1
//     }

//     (contador === 2)
//     ? console.log ("Es un numero primo")
//     : console.log ("No es un numero primo")
 
//     }

// numeroPrimo(31)

// const numeroPar = (number = undefined) => {



//   if (!number) return console.warn("No ha ingresado ningun numero");
//   if (typeof number !== "number") return console.error("No ha ingresado un numero valido");

//   const parImpar = number % 2;

//   (parImpar !== 0)
//   ?console.log(`El numero ${number} es impar`)
//   :console.log(`El numero ${number} es par`)
// }

// numeroPar()

// const temperatura = (number = undefined, unidad="") => {


//   if (typeof number !== "number") return console.error("No ha ingresado un numero valido");

//   if (!unidad) return console.warn("No ha ingresado ninguna unidad para convertir");

//   if ((unidad.toLowerCase()!== "c") && (unidad.toLowerCase()!== "f")) return console.warn("No ha ingresado una unidad valida para convertir. Las opciones son: c(grados centigrados) o f(grador fahrenheit)");

//   (unidad === "c")
//   ?console.log(`${number} grados centrigrados es equivalente a ${(number * 1.8) + 32} grados fahrenhit`)
//   :console.log(`${number} grados farenheit es equivalente a ${(number - 32) / 1.8} grados celsius`)
// } 

// temperatura(100,"f")

// const binarioDecimal = (numero = undefined, unidadConversion = undefined) => {


// }


//BINARIO A DECIMAL

// const binarioDecimal = (number=undefined) => {

// convertirString = number.toString()

// arrayNumeros = convertirString.split('').reverse()

// guardarValor = 0


// for (const elemento in arrayNumeros) {

//         guardarValor += (2 ** elemento) * arrayNumeros[elemento]
        
//     }
//     console.log(`El numero binario ${number} convertido a decimal es ${guardarValor}`)
// }

//DECIMAL A BINARIO 

// const decimalBinario = (division = undefined) => {

//     if (division===0) {
//         return console.log("0 decimal convertido a binario es 0")
//     }

//     if (!division) {
//         return console.log("ingrese un numero valido")
//     }

//     let numeroAconvertir = division

//     let dividendo = 2
    
//     let modulo = ""
    
//     while(division !== 0){

//         modulo += division % dividendo

//         division = Math.floor(division / dividendo)
//     }

//     let resultado = (modulo.split("").reverse().join(""))

//     console.log(`El numero decimal ${numeroAconvertir} convertido a binario es ${resultado}`)
        
//     }

// const funcionConversora = (number=undefined, base=undefined) => {
//   (base === 10) ? binarioDecimal(number)
//   :(base === 2) ? decimalBinario(number)
//   :console.error("Ingrese una base correcta")
// }

// funcionConversora(100,10)


// const descuento = (valor=undefined, porcentaje=undefined) => {

//     if (!valor) {
//     return console.log("ingrese un numero valido")
//     }

//     if (!porcentaje) {
//     return console.log("ingrese un porcentaje valido")
//     }

//     if (porcentaje>100 || Math.sign(porcentaje) === -1) return console.log("ingrese un numero  entre 0 y 100")

//     if (Math.sign(valor) === -1) return console.log("ingrese un numero positivo")


//     let operacion = valor * (1 - (porcentaje/100))

//     return console.log(`El valor a pagar al aplicar un descuento de ${porcentaje}% es de ${operacion}`)

// } 

// descuento(92121,20)



//Calcular anios desde una fecha especifica


// const calculoAnios = (fecha = undefined) => {

//     let anioUsuario = fecha.getFullYear();

//     let mesUsuario = fecha.getMonth()-1;

//     let diaUsuario = fecha.getDate();

//     let anioActual = new Date().getFullYear();

//     let mesActual = new Date().getMonth();


//     let diaActual = new Date().getDate();

//     let diferenciaAnio = anioActual - anioUsuario;

//     let resultado = 0;

//     ((mesActual >= mesUsuario && (diaActual >= diaUsuario)) 
//     ?(resultado = diferenciaAnio)
//     :(resultado = diferenciaAnio - 1)
//     );

//     console.log(`Han pasado ${resultado} anios desde ${anioUsuario} hasta ${anioActual}`)

// }

// calculoAnios(new Date(2090,1,1))


// const vocalesConsonantes = (texto="") => {

//     const textoSinEspacios = texto.replace(/ /ig,"");

//     const regExpVocales = /[a,e,i,o,u]/ig;

//     const regExpConsonantes = /[b-d, f-h, j-n, p-t, v-z]/ig;

//     let contadorVocales = (textoSinEspacios.match(regExpVocales).length);

//     let contadorConsonantes = (textoSinEspacios.match(regExpConsonantes).length);

//     console.log(`El numero de vocales que se encuentra en la palabra ${texto} es ${contadorVocales}`);

//     console.log(`El numero de consonantes que se encuentra en la palabra ${texto} es ${contadorConsonantes}`);
// }

// vocalesConsonantes("PerroRoedorzzz")


 //Validacion Nombres

//  const nombreValido = (texto = "") => {

//     const uniendoTexto = texto.replaceAll(" ", "");

//     console.log(uniendoTexto);

//     const expresionRegular = /[\d, \W]/g;

//     // const revisando = texto.match(expresionRegular);

//     // console.log(revisando)

//     if ((expresionRegular.test(uniendoTexto))) {
//         return console.log("La cadena de texto que ha ingresado no corresponde a un nombre")
//     }else {
//         console.log("Ha ingresado un nombre valido")
//     }

//  }

//  nombreValido("#Juan Manuel Garcia#&")

//Otra opcion

// const validarNombre = (nombre="") => {
//     //^No puede haber nada antes de la expresion. $No puedo haber nada despues de la expresion. Simbolo de + para que lo evalue por cada caracter. \s acepta espacios en blanco
//     let expReg = /^[a-z\s]+$/ig.test(nombre);

//     return (expReg)
//         ? console.info (`El nombre ${nombre} es valido`)
//         : console.warn (`El nombre ${nombre} no es valido`)
// }

// validarNombre("Juan")


//Validacion Email

// const validarEmail = (email="") => {
//     //^No puede haber nada antes de la expresion. $No puedo haber nada despues de la expresion. Simbolo de + para que lo evalue por cada caracter. \s acepta espacios en blanco
//     let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

//     return (expReg)
//         ? console.info (`El email ${email} es valido`)
//         : console.warn (`El email ${email} no es valido`)
// }

// validarEmail("jon,mr,cha@gmail")

// //Array elevado al cuadrado

// const arrayCuadrado = (array = []) => {
//     nuevoArray = []
//     array.forEach(element => {
//         let operacion = (element)**2;
//         nuevoArray.push(operacion);
//     });

//     console.log(`El array elevado al cuadrado es ${nuevoArray}`);
// }

// arrayCuadrado([1,2,3,4])

//Comparar valores array

// const valores = (array = []) => {

//     const compareNumber =(a,b) =>{
//         return a-b
//     }

//     ordernarNumeros = array.sort(compareNumber)

//     console.log(ordernarNumeros)

//     valorMinimo = ordernarNumeros[0];

//     valorMaximo = ordernarNumeros[ordernarNumeros.length - 1]

//     console.log(`El valor minimo es ${valorMinimo} y el valor maximo es ${valorMaximo}`)

// }

// array = [1,2,3,10,12,5,6,7,8,22,21,-10,212121299,9999];

// valores(array)

// const array = (array = []) => {

//     if (!(array instanceof Array)) return console.warn("Ingrese un array valido")

//     let arrayPares = [];
//     let arrayImpares =[];
//     array.forEach(element => {
//         if(element % 2 === 0) {
//             arrayPares.push(element)
//         }else{
//             arrayImpares.push(element)
//         }
        
//     });
//     console.log(`Los numeros pares son ${arrayPares} y los numeros impares son ${arrayImpares}`)
// };

// let arreglo = [1,2,3,10,12,5,6,7,8,22,21,-10,212121299,9999,50];

// array(arreglo)

