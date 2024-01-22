//obtener(GET) hacer una peticion get a la pokeAPI
const API_URL = "https://pokeapi.co/api/v2";

const btn = document.getElementById("btn-fetch");

btn.addEventListener("click",async () => {
    const pokemons = await fetchPokemon();
    pokemons.forEach(pokemon => console.log(pokemon));
})

const fetchPokemon = async () => {
    try{
  const data = await fetch(`${API_URL}/pokemon?Limit=151`);
  const parsedData = await data.json();
  return parsedData.results;
    } catch(error){
    console.error(error)
  //.then (res => console.log(res.json()));
}
}