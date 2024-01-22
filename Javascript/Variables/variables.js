//variables numericos//

const { x } = require("tar");

var edadHector = 25;
edadHector = 30; //como es  una variable se puede cambiar//

console.log("la edad de hector es:" + edadHector);

let añonacimientoDenisse = 1995;
console.log("denisse nacio en el año:" + añonacimientoDenisse);

let suma = edadHector + añonacimientoDenisse;
 console.log("la suma de la edad de hector y el año de nacimiento de dennise es:" + suma);


 // variables de tipo string//

 let postrefavorito = "helado";
 var movieFav = "star wars";
 // en cosnola ->typeof(movieFav)= tipo string//
//movieFav= star wars//

//variables de tipo booleano//
//true o false//

let minombreesdennise = false;

var amIAlive = true;

//variables de tipo nulo(null)//

let datovacio = null;
//en la consola -> typeof(datovacio)= object
let datovacio1 = "";
//Se entiende cuando la informacion obtenida no contiene nada//

//variables de tipo array//

let colecciondeCoches = ["porsche", "mercedez benz", "ferrari nissan"];

let frutas = ["Manzana,", "Platano", "Mango"];

let nuevoarreglo = [0, 2, 4, 6, 8, 10];

let nuevoarreglo1 = ["hola mundo", 25, true, null, ("alo", 32454)];

let numerospares

//variables de tipo objeto//

let libro = {
    nombre: "el mundo de sofia", 
editorial: "abc",
año: 1990,
genero: "filosofia"
};

const NOMBRE_USUARIO = "Fernando";

NOMBRE_USUARIO = "Alberto" //saldra error porque es una constante//

//va a salir con error porque el orden no esta bien primero con let tiene que ser primero declarada y luego darle el valor//
x = 1;
alert("x = " + x);
let x;

//esta correcto puedes declarar la variable al principio o al final//
x = 1;
alert("x = " + x);
var x;


// var
var nombre = "Marcus";
console.log(nombre)

if (true){
    var nombre = "Dominic";
    console.log(nombre);
}
 // let
console.log(nombre);

var edad = 45;
console.log(edad);

if (true){
    let edad = 40;
    console.log(edad)
}

console.log(edad);


let nombre = "Alberto";
let edad = 22;
let condicion = true;
//se puede hacer una conversion el tipo de dato de la forma a continuacion//
//siempre cuando se quiera hacer una conversion se tiene que poner la primera letra en mayuscula//
//aparecera la conversion en la consola//
let edadString = String(edad);
let nombreNumerico = Number(nombre);
let nombreNumerico = Number(condicion); //resultado es 1=true 0=false//
let edadBoolean = Boolean(edad) //hay un dato numerico true=22, si no hay seria false=0


