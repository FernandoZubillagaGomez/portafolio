const btn = document.getElementById("btn-1");
console.log(typeof btn);
console.log(btn.id);// se puede poner tambien "id"
//get data display
console.log(btn.innerHTML);
btn.addEventListener("Click", (e) => {
    console.log("hola");

})


document.getElementById("input-1").addEventListener("input", (e) => {
   // document.getElementById("username"). innerHTML = e.target.value; //del evento(e) el elemento(target) y su valor(value)
   const elements = document.getElementsByClassName("user-info");
   for (let i = 0; i < elements.length; i++){
    elements[i].innerHTML = e.target.value;
    console.log(elements[i]);
   }
   //document.getElementsByClassName("user-info").innerHTML = e.target.value;
})

const input = document.getElementById("input-1");

input.addEventListener("change" , (e) => {//input chance poner
    console.log(e.target.value); //hasta e
})
