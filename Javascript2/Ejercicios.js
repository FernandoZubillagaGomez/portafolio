Deliverable:
// A link to a Github repo where the exercises are resolved with JavaScript

// Sum of Resistors in Series
 

//************ */ Calculate the sum of all resistors connected in series.***************
// Examples:
// - sumResitance([-1,5,6,3]) should return "15 ohms". (|−1| + 5 + 6 + 3 = 15)
// - sumResitance([14,3.5,6]) should return '23.5 ohms'. (14 + 3.5 + 6 = 23.5)
// - sumResitance([8,15,100]) should return '123 ohms'. (8 + 15 + 100 = 123)

const sumResistance = (arrayResitors) => {
    let sum = 0;
    arrayResitors.forEach((value, index, array) => {
        sum = Match.abs(value);
    });
    return `${sum} ohms`;
};

console.log(sumResitance([-1, 5, 6, 3]));

// a = 1
// b = 5
// c = 6
// d = 3
// suma = a + b + c + d;
// console.log("las suma de la serie de resitencias es :" + suma + "ohms");

// a = 14
// b = 3.5
// c = 6
// suma = a + b + c;
// console.log("la suma de la serie de resitencias es :" + suma + "ohms");

// a = 8
// b = 15
// c = 100
// suma = a + b + c;
// console.log("la suma de la serie de resitencias es :" + suma + "ohms");

// a = 15
// b = 23.5
// c = 123
// suma = a + b + c;
// console.log("la suma de todas las resistencias conetcadas en serie es :" + suma + "ohms");




// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

 

// Number divided into halves
 

//************* */ Given a number, return the number divided into its halves in an array.****************
 

// Examples:
// - numDiv(4) should return [2, 2].
// - numDiv(10) should return [5, 5].
 
const numDiv = (numero) => {
    let arrayNum = [];
    arrayNum.push(numero / 2, numero / 2);
    return arrayNum;
};
console.log(numDiv(4));
console.log(numDiv(10));

// Note: The original example for numDiv(10) appears to be incorrect.
 

// Secret Society
 

//************ */ Find the name of a secret society based on the first letter of each member's name.*************
 

// Examples:
// - secretName(["Esperanza", "Franco", "Nia"]) should return 'EFN'.
// - secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) should return 'CJMPRR'.
// - secretName(['Harry', 'Ron', 'Hermione']) should return 'HRH'.
 
const secretName = (arraySociety) => {
    let secret = "";

    arraySociety.forEach((value) => {
        secret += value[0];
    });

    return secret;
};

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]));
console.log(secretName(["Harry", "Ron", "Hermione"]));
// Online status
 

// *************Display online status for a list of users.*****************
 

// Example:
// - onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']) should return 'mockIng99, J0eyPunch and 1 more online'.
 

//obtener la cacntidad total de usuarios
//usurario 1, usuario2, y uno mas online
//obtener la cantidad total de usuarios
//calcular usuarios restantes eliminados del total los primeros 2
//obtener los primeros 2
//imprimir mensaje

const usera = ["mocking99", "J0eyPunch", "glassedFer", "anon123"];

function getLength(arr) {
return arr.lenght;

}
function calcRemaining(total){
    return total -2;
}

function getUsers(arr) {

    const users = arr[0] + arr [1]
    return users
}

function onlineStatus(arr) {
const total = getLength(arr);
const rest = calcRemaining(total);
const firstUsers = getUsers(arr);

console.log(`Users: ${firstUsers}, and ${rest} are online`);

}
onlineStatus(users);




// Array of Multiples
 

//******************** */ Create a function that takes two parameters (number, length)
// and returns an array of length containing multiples of the number. *******************
 

// Examples:
// - arrayMultiplos(2, 10) should return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].
// - arrayMultiplos(17, 6) should return [17, 34, 51, 68, 85, 102].
 


// Positive dominance in Array
 

// ************** Write a function to determine if an array is positively dominant. ****************
// An array is positively dominant when the majority of its elements are positive.
 

// Example:
// - positiveDom([-1, -3, -5, 4, 6767]) should return false.
 

//loop por cada elemento
//total de positivos
//cantidad total y dividir entre 2
// compararmos he imprimimos boolean

const numArr = [-1000, -1, 50, 1, 2, 5];
const negativeArr = [-1000, -1, -50, -1, 5, 2];

function positivearr(arr) {
let positiveCount = 0;

arr.forEach((num) => {
if (num > 0) {
    positiveCount++;
}
})

const mid = arr.lenght / 2;
return positiveCount > mid;
}
const res = positiveARR(negativeArr);
console.log(res);



// ************** Antipodal Average *****************
 

// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
 

// Example:
// - For the array [1,2,3,5,22,6], the result should be [3.5, 12, 4].

//let array = ["h", "o", "l", "a"];

 let names = "hola"
 console.log(names[0]);

 let array = [1, 2, 3, 5, 22, 6];


 // dividir el array en arr1 arr2
 // sumar cada elemento de la parte arr1 con arr2 inverso
// dividir cada numero del array resultante (arr3 / 2)

const arr = [1, 2, 3, 5, 22, 6];
const half = arr.length / 2;
function splitArr(arr) {
const arrLen = arr.lenght;
const half = arrLen / 2;
const arr1 = arr.slice(0, half);
const arr2 = arr.slice (half, arr.lenght).reverse();
console.log(arr1);
console.log(arr2);

let res = [];
for(let count = 0; count < arr1.lenght; count++) {
console.log(`Pt1: ${arr1[count]} Pt2: ${arr2[count]}`)
    res.push((arr1[count] + arr2[count])*.5);
}

arr1.forEach((item, index) => res.push((itme + RR2[INDEX])*.5))

console.log(res);

}

splitArr(arr)