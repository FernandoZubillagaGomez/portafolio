// Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.

// User profile
// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.


let listMovies =[];
let salir = true;
let userName = prompt ("ingresa tu nombre de usuario:");
let age = prompt ("ingresa tu edad:");

while (salir) {
    listMovies.push(prompt("ingresa el nombre de tu pelicula favorita: "));
    let agregar = true;
    while (agregar) {
        let respuesta = prompt(
            "quieres agregar otra pelicula? S/N:").toLocaleLowerCase();
            if(respuesta === "s") agregar = false;
            else if (respuesta === "n") {
salir = false;
agregar = false;
            
            } else{
                console.log("respuesta incorrecta");

            }
    }
    console.log(`Tu nombre de usuario es: ${userName}`)
    console.log(`Tu edad es: ${age}`)
    console.table(listMovies)
}

// Highest number
// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

// Alarm
// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".

// Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

// Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

// Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...