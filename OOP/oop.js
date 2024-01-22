class IceCreamMaker {
    //constructor -> siempre se utliliza this.
        //atributos
        constructor(flavor, milk, size){

        this.flavor = flavor;
        this.milk = milk;
        this.size = size;
    }

//metodos aka funciones
//getters
getFlavor(){
    return this.flavor
}

getMilk(){
    return this.milk;
}

getSize(){
    return this.size
}

// chooseFlavor(flavor) {
//     console.log(`Flavor for iceCream is ${this.flavor}`)
// }
// chooseMilck(milk) {
//     this.milk = milk;
//     console.log(`Type of milk is: ${this.milk}`)
// }

// chooseSize(size){
//     this.size = size;
//     console.log(`Size of IceCream: ${this.size}`)
// }

printIceCream() {
    console.log(`Here is your IceCream: ${this.getFlavor()}, size: ${this.getSize()}, and made with: ${this.getMilk()} milk`)
}
}


//implementar por medio de una instancia
const firstIcecream = new IceCreamMaker("Chocolate", "Almond", "Medium");

// firstIcecream.chooseFlavor("chocolate");
// firstIcecream.chooseFlavor("Almond");
// firstIcecream.chooseFlavor("Large");

firstIcecream.printIceCream()