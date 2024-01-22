 for(let x = 1; x < 16; x++){
    let result = "";
    if(x % 3 == 0){
        result += "Fizz";
    }
if(x % 5 == 0){
    result += "Buzz";
}
console.log(result || x)

module.exports = result
 }


