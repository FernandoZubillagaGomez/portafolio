//funcion sencilla sin parametros no devuelve ningun valor//

function miFuncion(){
    return "hola";
    
    console.log ("mi primera funcion");
}

//funcionn que saluda a quien lo manda a invocar//

function saludarUsuario(nombre){
console.log("hola " + nombre);
}

//funcion que realice la suma de 4 numeros diferentes//

function sumarNumeros(a, b, c, d){
return a+b+c+d //se puede modificar el resultado en la consola//

//console.log(a, b. c. d)  no se puede modificar el resultado en la consola porque se imprime//

}
//otra froma de concatenar `${}`//
function saludarUsuario(nombre){
    console.log(`hola ${nombre}`);
    }

    function sumarNumeros(a, b, c, d){
        console.log (`la suma de los numeros es: ${a + b + c + d}`);

    }

    let mesgCompleto = `Mensaje completo: ${msg1} ${msg2} ${msg3}`;

    //funciones flecha//

    //usar palabras recerbadas usar la recomendada const//

    //operador de asignacion = y los parentesis ()
   // fast arrow => y llaves {}//

   const miFuncionFlecha = () => console.log("Mi primera funcion" + "en JavaScript");


