const getPokemonHandler = async () => {
  const id = dom.searchBar.value;
  if (id === data.id){
    return
}
  try {
    const data = await getPokemon(id);
    const newCard = createPokemon(data);
    dom.container.innerHTML = '';
    dom.container.append(newCard);
    
  } catch (error) {
    console.error(error);
    const errorText = document.createElement('h1');
    errorText.innerText = 'Please enter the valid Pokemon Ids separated by ","';
    dom.container.innerHTML = '';
    dom.container.append(errorText);
  }
  data.id = id;
  }

export default getPokemonHandler;


////
import dom from "../dom.js";
import data from "../data.js";
import getPokemon from "../../apis/getPokemon.js";
import createPokemon from "../components/createPokemon.js"

const getPokemonHandler = async () => {
  const id = dom.searchBar.value;
  if (id === data.id){
    return
}
  try {
    const data = await getPokemon(id);
    const newCard = createPokemon(data);
    dom.container.innerHTML = '';
    dom.container.append(newCard);
    
  } catch (error) {
    console.error(error);
    const errorText = document.createElement('h1');
    errorText.innerText = 'Please enter the valid Pokemon Ids separated by ","';
    dom.container.innerHTML = '';
    dom.container.append(errorText);
  }
  data.id = id;

  //check the ids whether its valid or not
  const validIds = [];
  const values = id.split(',');
  values.forEach((val) => {
    const valNum = Number(val);
    if (!Number.isNaN(valNum) && valNum > 0 && valNum < 1281) {
      validIds.push(valNum);
    }
  });    
 //check if the user enter valid ids or not

 if (validIds.length === 0) {
  errorText.innerText = 'your ids are not valid';
  errorText.classList.add('error');
  return;
 }
//remove error if exits
if (errorText.innerText !== '') {
  errorText.innerText = '';
  errorText.classList.remove('error');
}
const pokemonPromises = validIds.map((ids)=> getPokemon(ids));
console.log(pokemonPromises)
const pokemons = await Promise.all(pokemonPromises);

pokemons.forEach((pokemonData)=> {
const pokemonDom = createPokemon(pokemonData);
dom.container.append(pokemonDom)
})
}

export default getPokemonHandler;