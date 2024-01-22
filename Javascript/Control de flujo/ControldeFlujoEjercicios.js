/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

const { x } = require("tar");

//si entonces



const persona2edad = (edadVotar) => {
    let result;
    if (edadVotar >= 18) {
      result = 'tiene derecho a votar ';
    } else {
      result = 'No tiene derecho a votar';
    }
    return result;
  }
  console.log(persona2edad(18));

////////

function persona1edad (edadVotar) {
    let result;
    if (edadVotar >= 18) {
      result = 'tiene derecho a votar ';
    } else {
      result = 'No tiene derecho a votar';
    }
    return result;
  }
  console.log(persona1edad(17));

//////

  function persona3edad(edadVotar) {
    return edadVotar >= 18 ? 'tienes derecho para votar' : 'no tienes derecho a votar';
  }
  
  console.log(persona3edad(17));
  

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else*/
 


let persona1 = 8;
let persona2 = 7;
let persona3 = 5;
let persona4 = 9;

let resultadopromedio = (persona1 + persona2 + persona3 + persona4) / 4;
 resultadopromedio >= 7 ? console.log("aprovado") : console.log("reprovado");


////////


function grupodePersonas1 (resultadoDeseado) {
let persona1 = 1;
let persona2 = 3;
let persona3 = 3;
let persona4 = 3;

let resultadopromedio = (persona1 + persona2 + persona3 + persona4) / 4;

if(resultadoDeseado <= 7){

resultadopromedio = "aprovados"
}
else {
  resultadopromedio = "reprovados"
}
return resultadopromedio
 }

console.log(grupodePersonas1(resultadopromedio))


/////////

const grupodePersonas2 = (resultadoDeseado) => {

  let persona1 = 1;
  let persona2 = 3;
  let persona3 = 3;
  let persona4 = 3;
  
  let resultadopromedio = (persona1 + persona2 + persona3 + persona4) / 4;
  
  if(resultadoDeseado <= 7){
  
  resultadopromedio = "aprovados"
  }
  else {
    resultadopromedio = "reprovados"
  }
  return resultadopromedio
   }
  
  console.log(grupodePersonas2(resultadopromedio))



/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function calcular(modulardeseado) {
  let numeroPrueba1 = 56;
  let modular = 7;

let resultadoModular = numeroPrueba1 + modular;

if(modulardeseado === 0){

resultadoModular = "si es un numero divisible";
} 
else {
resultadoModular = "no es un numero divisible";
}
return resultadoModular

}
console.log(calcular(resultadoModular))


/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */