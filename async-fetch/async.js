async function f() {return 1}
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("done"), 3000)
    })
    let result = await promise;
    console.log(result);
}

async function b() {
    let promise = new Promise((res, rej) => setTimeout(() => res ("done b"), 5000))
    console.log(await promise);
}

f();
b();

// console.log(f());

// f().then(console.log("response"));

// f().then((res) => console.log(res));

// f().then(function(res) { console.log(res) })

// tipo de peticion -> fetch