const result = require("./fizzbuzz");

test ("If divisible by both 3 and 5, return 'FizzBuzz'", ()=>{
    expect(result(15)).toBe("FizzBuzz");
})
