// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}
console.log(fetchPokemon("pikachu"));

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        console.log(pokemon.name);
        console.log(pokemon.weight);
        console.log(pokemon.id);
        console.log(pokemon.sprites.front_default);
        showInfo(
            pokemon.name,
            pokemon.weight,
            pokemon.id,
            pokemon.sprites.front_default,
            );
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
        console.log(pokemon.name);
        console.log(pokemon.weight);
        console.log(pokemon.id);
        console.log(pokemon.sprites.front_default);
})

// obtener el anterior
// 
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
       
        showInfo(
        pokemon.name,
        pokemon.weight,
        pokemon.id,
        pokemon.sprites.front_default,
        );
        localStorage.setItem("currentPokeId", pokemon.id)
    })

const showInfo = (name, id, weight, Img) =>{
const nombrecard = document.getElementById("card-title");
const idcard = document.getElementById("id");
const weightcard = document.getElementById("peso");
const imagencard = document.getElementById("imagen-card");
const searchPokemon = document.getElementById("poke-name")
        nombrecard.innerHTML = name;
        searchPokemon.value = name;
        idcard.innerHTML = id;
        weightcard.innerHTML = weight;
        Imagencard.src = Img;
    }



////////////////// POST
//

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'title1',
//         body: 'Lorem ipsum dolor sit amet',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(res => res.json())
//     .then(json => console.log(json))


/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
