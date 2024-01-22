let names = ["Zabdiel", "Fernando", "Magali", "Yare"];

let numbers = [10, -1000, 5.5, 40, 30];

let mix = ["Zabdiel", 20, "Diaz", "Generation Mexico", true];

let booleanMix = [true, false, false, true];

//acceder a la info de un array

const userData = ["Fernando", 28, "Generation Mexico", "Imagine Dragons"]

console.log(userData);

//print

console.log(userData);

//longitud

const arrLength = userData.length;

console.log(userData.length);
console.log(arrLength);

//indicamos y/o posicion son diferentes a la longitud
//indicamos la posicion dentro de corchetes [pos]
console.log(userData[3]);

const name = userData[0];

//console.log(`Mi nombre es: ${username}`);

const matrix = [[-1,0], [1.-1]];

//eje X y eje Y
console.log(matrix[0][1]);

//coordenadas de londres

const LondonCoord = [[51, "30 '30 N'"], [0, "7 '32 O'"]];

console.log(matrix[0][1]);

//pop elimina el ulitmo dato que encuentre dentro de un array

userData.pop()
console.log(userData);

//push-> agrega algun dato al final del array

userData.push("ABBA");
console.log(userData);

//join - va a unir los elementos con un espacio 
//une los elementos con el caracter o string que indiquemos
console.log(userData.join(" "));
//shift - ellimina el primer elemento y acomoda el resto
console.log(userData.shift())
console.log(userData);

//unshift agrega algun dato al inicio del Array

console.log(userData.unshift("kuromi", 100, 300, true));
console.log(userData)






