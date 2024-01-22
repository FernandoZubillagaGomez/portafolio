const numero = require("./fizzbuzz");

test ("el numero factorial debe salir 120", ()=>{
    expect(numero(5)).toBe(120);
})
