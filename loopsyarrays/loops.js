console.log("Archivo de loops");

//bucle algo que se repite

const names = ["Zabdiel", "Griselo", "Yare", "Fernando", "Magali"];

console.log(names.length);

// for

for (let count = 0; count < names.length; count++) {
console.log(names[count]);
}
// for (let i = 0; i < 1500; i++){
//     console.log(i);
// }

// for (let i = 1500; i >=0; i--){
//     console.log(i);
// }

for (let i = 0; i <= names.length - 1; i++){
    console.log(names[i]);
}

//while
// let count =1
// while(count<= 10){
// console.log("Hola");
// count++;

let count =1
while(count<= 10){
console.log(count);
count++;
}

// white(count <= Infinity){
//     console.log(count);
//     cont++;
// }

//do while
//El procedimiento interno se realiza si o si al menos una vez
do {

    console.log(count);
    count++;
}
    // while (count<=5);
    while (count < 1);

    //forEach
//procdimiento bloque de codigo por cada elemento dentro de un array
//el bloque de codigo dentro de un forEach puede ser cualquier instruccion

//  names.forEach((user) => {
// console.log(user);
//     })
//es lo mismo que lo de arriba
names.forEach(name => console.log(name));

function printName(name) {
    console.log(`Username: ${name}`)
}

names.forEach((user)=> {
    printName(user)
})

//funcion que se loops y que resuelve en factorial de un numero n donde 1000 >n > 0

const n = 5
const calcFact = (number) => {
    let res; 
    for(number; number >= 1; number--){
res *= number;

    }
    return res;
}

console.log(calcFact(n));


//recursividad

const factorial = (num) => {
if (!num ===1) {
    factorial(num * num - 1);
}
return num;
}