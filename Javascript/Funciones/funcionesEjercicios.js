// Ejemplo de funcion que no devuelve ningun valor//

 const { r } = require("tar");

function nuevaFuncion(){
    console.log("Mi nueva funcion");
}

//El perimetro de un circulo//

function circuloPerimetroSimplificado(a){
//p = 2*pi*radio //
p = 2 * 3.1416 * a
return p;
}

//forma para concatenar/

function circuloMensajePerimetro(a){
    p = 2 * 3.1416 * a
    return "El perimetro calculado de un circulo es de: " + p + " metros";

}

//otra forma para concatenar//

function circuloBackticsPerimetro(a){
    let p = 2 * 3.1416 * a
    return `El perimetro calculado de un circulo es de: ${p} metros`;
}

//otra forma de usar una funcion es usando: Funciones flecha | Fat arrow | Arrow function//

const circuloPerimetroFlecha = (a) => console.log('El perimetro calculado de un circulo es:' + 2 * 3.1416 * a + 'metros');

//convertir texto en mayusculas//
const mayusculasFlecha = (texto) => texto.toUpperCase();

//Convertir texto a minusculas
const minusculasFlecha = (texto) => texto.toLowerCase();



//El perimetro de un rectangulo//

function rectanguloPerimetroSimplificado(a){
    //p = Lado+Lado+Lado+Lado//
    p = a+a+a+a
    return p;
    }
    
    //forma para concatenar/
    
    function rectanguloMensajePerimetro(a){
        p = a+a+a+a
        return "El perimetro calculado de un rectangulo es de: " + p + " metros";
    
    }
    
    //otra forma para concatenar//
    
    function rectanguloBackticsPerimetro(a){
        let p = a+a+a+a
        return `El perimetro calculado de un rectangulo es de: ${p} metros`;
    }
    
    //otra forma de usar una funcion es usando: Funciones flecha | Fat arrow | Arrow function//
    
    const rectanguloPerimetroFlecha = (a) => console.log('El perimetro rectangulo de un circulo es:' + a+a+a+a + 'metros');
    


    //El cuadrado de un numero//

function potenciaSimplificado(a){
    //potencia al cuadrado de un numero = x**2 //
    potencia = a**2
    return potencia;
    }
    
    //forma para concatenar/
    
    function potenciaMensaje(a){
        potencia = a**2
        return "El cuadrado de un numero declarado en consola es: " + potencia;
    
    }
    
    //otra forma para concatenar//
    
    function potenciaBacktics(a){
        let potencia = a**2
        return `El cuadrado de un numero declarado en consola es: ${potencia}`;
    }
    
    //otra forma de usar una funcion es usando: Funciones flecha | Fat arrow | Arrow function//
    
    const potenciaFlecha = (a) => console.log('El cuadrado de un numero declarado en consola es:' + a**2);


    //la conversion de grados celsius a farenheit//


function temperaturaConversionSimplificado(a){
    //conversion de celcius a farenheit: farenheit= (Celcius*1.8)+32 //
    conversion = a*1.8+32
    return conversion;
    }
    
    //forma para concatenar/
    
    function temperaturaConversionMensaje(a){
        conversion = a*1.8+32
        return "la conversion de una temperatura dada en celcius a farenheit es:" + conversion;
    
    }
    
    //otra forma para concatenar//
    
    function temperaturaConversionBacktics(a){
        let conversion = a*1.8+32
        return `la conversion de una temperatura dada en celcius a farenheit es: ${conversion}`;
    }
    
    //otra forma de usar una funcion es usando: Funciones flecha | Fat arrow | Arrow function//
    
    const temperaturaConversionFlecha = (a) => console.log('la conversion de una temperatura dada en celcius a farenheit es:' + a*1.8+32);


    
    //El VALOR DEL VOLTAJE DADAS LA RESISTENCIA Y LA CORRIENTE //

     function voltajeSimplificado(a, b){
     //voltaje= I*R //
     voltaje = a*b
         return voltaje;
    }
        
         //forma para concatenar/
        
         function voltajenMensaje(a, b){
            voltaje = a*b
             return "el valor del voltaje dadas la resistencia y la corriente es:" + voltaje;
        
         }
        
         //otra forma para concatenar//
        
        function voltajeBacktics(a, b){
            let voltaje = a*b
             return `el valor del voltaje dadas la resistencia y la corriente es: ${voltaje}`;
        }
        
      //otra forma de usar una funcion es usando: Funciones flecha | Fat arrow | Arrow function//
        
    const voltajeFlecha = (a, b) => console.log('el valor del voltaje dadas la resistencia y la corriente es:' + a*b);

    //EL VOLUMEN DE UNA ESFERA//

    function volumenEsferaSimplificado(a){
        //volumen de una Esfera= (4/3)3.1416(r**3) //
        volumenDeEsfera = 4/3*3.1416*a**3
            return volumenDeEsfera;
       }
           
            //forma para concatenar/
           
            function volumenEsferaMensaje(a){
                volumenDeEsfera = 4/3*3.1416*a**3
                return "el volumen de una esfera dada el valor del radio es:" + volumenDeEsfera;
           
            }
           
            //otra forma para concatenar//
           
           function volumenEsferaBacktics(a){
               let volumenDeEsfera = 4/3*3.1416*a**3
                return `el volumen de una esfera dada el valor del radio es: ${volumenDeEsfera}`;
           }
           
         //otra forma de usar una funcion es usando: Funciones flecha | Fat arrow | Arrow function//
           
       const volumenEsferaFlecha = (a) => console.log('el volumen de una esfera dada el valor del radio es:' + 4/3*3.1416*a**3);

