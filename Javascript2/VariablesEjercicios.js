//variables numericas//

let EdadPersona1 = 20
let EstaturaPersona1 = 1.7
let NumerodeSeguroSocialPersona1 = 47484909
let CantidadDemascotasPersona1 = 2
let CantidadTelevisoresEnCasaPersona1 = 2
let CalificacionDelBachilleratoPersona1 = 8.2
let MesesDeExperienciaLaboralPersona1 = 32
let NumeroDeTrabajadorPersona1 = 2345
let CuantosHijosPersona1 = 0
let CantidadDeLibrosPersona1 = 25


console.log("la edad de la persosna1 es de:"+ EdadPersona1, 
"la estatura de la persona1 es de:" + EstaturaPersona1 , 
"el numero de seguro social de la persona1 es:" + NumerodeSeguroSocialPersona1,
"la cantidad de mascotas de la persona1 es:" + CantidadDemascotasPersona1,
"la cantidad de televisores que tiene en casa de la persona1 es:" + CantidadTelevisoresEnCasaPersona1,
"la calificacion de bachillerato de la persona1 es:" + CalificacionDelBachilleratoPersona1,
"los meses de experencia laboral de la persona1 es:" + MesesDeExperienciaLaboralPersona1,
"el numero de trabajador de la persona1 es:" + NumeroDeTrabajadorPersona1,
"la cantidad de hijos de la persona1 es:" + CuantosHijosPersona1, 
"la cantidad de libros que tiene la persona1 es:" + CantidadDeLibrosPersona1);

// variables de tipo string//

let deporteFavorito = "Futbol";
let peliculaFavorita = "Avengers";
let VideojuegoFavorito = "Halo";
let MaterialEscolarFavorita = "Ingles"
let SerieFavorita = "onePiece"
let PostreFavorito = "chocolate"
let LibroFavorito = "La bailarina de Auschwitz"
let ProgramaFavorito = "La dichosa Palabra"
let FrutaFavorita = "manzana"
let TuFinDeSemanaIdeal = "Ir a jugar futbol, descanzar mientras veo un documental o una serie de TV"
// en cosnola ->typeof(deporteFavorito)= tipo string//

//variables de tipo booleano//
//true o false//

let minombreesfernando = true;
let migeneroesmasculino = true;
let megustajugarfutbol = true;
let megustaelfutbolamericano = false;
let minombreesjessica = false;
let megustabailar = false;
let megustaelhelado = true;
let megustanlosautos = true;
let megustansaliracorrer = true;
let megustanlosvideojuegos = true;

//Declarar variables numericas y realizar las operaciones aritmeticas basicas//

let suma =  EdadPersona1 + EstaturaPersona1;
let resta =  EdadPersona1 - EstaturaPersona1;
let multiplicacion =  EdadPersona1 * EstaturaPersona1;
let Division =  EdadPersona1 / EstaturaPersona1;


 console.log("la suma de la edad y la estatura de la persona1 es:" + suma, 
 "la resta de la edad y la estatura de la persona1 es:" + resta,
 "la multiplicacion de la edad y la estatura de la persona1 es:" + multiplicacion,
 "la division de la edad y la estatura de la persona1 es:" + Division);

 //Declarar 5 variables y convertirlas a otro tipo de dato//

let nombre = "Juan";
let edad = 35;
let condicion = false;
let sueldo = 8000
let suma1 = edad + sueldo  

 let edadString = String(edad);
 let nombreNumerico = Number(nombre);
 let nombreNumerico1 = Number(condicion); //resultado es 1=true 0=false//
 let edadBoolean = Boolean(edad); //hay un dato numerico true=35, si el dato numerico es 0=false//
 let suma1String = String(suma);