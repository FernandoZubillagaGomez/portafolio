const calc = require ("../calculadora")
test ("adds a + b to equal 3",()=>{
    expect(calc.add(1, 2)).toBe(3);
})

test ("Returns a to the power of b", ()=>{
    expect(calc.power(2, 2)).toBe(4);
})