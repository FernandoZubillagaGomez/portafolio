//palabras recervadas (if)//

// const { x } = require("tar")

//establecer una condicion//
//bloque que se ejecuta si la condicion se cumple//

//let x = 10;
//condicion qe evalue si un numero con el nombre "x" es mayor a 10//
//if(x>10)
// if(x=10){
// console.log("el numero es mayor a 10")
// }

// else{
//     console.log ("el numero es mayor a 10")
// }

 //let x = 10;
   //  let x = 15;
    //let x= 20;
//let x = 25;


// if(x>10 && x<20){
//     console.log("el numero es mayor a 10 y menor a 20")
//     }
//     //si no se cumple pasa a la segunda opcion
//     else{
//         console.log ("el numero no es mayor a 10 ni menor a 20")
//     }

// Si mi condicion es mayor a 10 y menor a 20 completado
// Si mi concicion es mayor que 10 y mayor que 20
// Si mi nuemero es igual a 10
// Si mi numero es igual a 20
// Si mi numero no es mayor que 10 ni menor que 20

// if(x>10 && x<20){
// console.log( "el numero es mayor a 10 y menor a 20")
// }

// else if(x>10 && x<20) {
//     console.log("el numero es mayor que 10 y mayor que 20")

// }

// else if (x === 10){
//     console.log("el numero es igual a 10")

// }

// else if (x === 20){
// console.log("el numero es igual a 20")

// }

// else {
// console.log("el numero no se encuentra dentro del rango")

// }

//operador ternario
//versio compacta de if else

//declarar operador ternario
// let calificacion = 7;
// //operacion que me perimta evaluar una calificacion o no//

// let evaluarCalificacion = calificacion >= 7 ? "aprovado":"reprobado"

// if(calificacion >= 7){
// console.log("aprovado")
// }

// else{
//     console.log("reprobado")
// }

let color = "azul";

function adivinarColor(color){

    switch(color.tolowerCase()){
        case "rojo":
            console.log("tu color es rojo")
            break;
    
    
        case "azul":
            console.log("tu color es verde")
            break; //va a detener la ejecucion de casos hasta que se cumpla una condicion//
    
            case "verde":
                console.log("tu color es azul") //se imprime este//
                break;
    
            default:
                console.log("no conozco ese color")
                break;
    }

}

// switch(color){
//     case "rojo":
//         console.log("tu color es rojo")
//         break;


//     case "azul":
//         console.log("tu color es verde")
//         break; //va a detener la ejecucion de casos hasta que se cumpla una condicion//

//         case "verde":
//             console.log("tu color es azul") //se imprime este//
//             break;

//         default:
//             console.log("no conozco ese color")
//             break;
// }

// console.log(color.tolowerCase()); minusculas
//console.log(color.toUpperCase()) mayusculas

//realziar una fucnion que evaule un numero si impar o impar

function parimpar(numero){
if(numero%2 === 0){
console.log("el numero ${numero} es par")
}
    else {
        console.log("tu numero ${numero} es impar")
    }
}

//Lo mismo, pero usando funciones flecha y operador ternario://

const parImpar = ( numero ) => ( numero % 2 === 0 ) ? console.log(`El numero ${ numero } es par`) : console.log(`El numero ${ numero } es impar`);