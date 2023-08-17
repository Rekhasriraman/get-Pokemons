import dom from "../dom.js";
import data from "../data.js";
import getPokemon from "../../apis/getPokemon.js";
import createPokemon from "../components/createPokemon.js";

const errorText = document.createElement('h1');
errorText.classList.add('error');

const getPokemonHandler = async () => {
  const id = dom.searchBar.value;

  // Check if the input ID is empty
  if (!id.trim()) {
    // Remove previous error messages
    if (errorText.parentElement) {
      errorText.parentElement.removeChild(errorText);
    }

    errorText.innerText = 'Please enter a valid Pokemon ID separated by ","';
    dom.container.innerHTML = '';
    dom.container.append(errorText);
    return;
  }

  // Check if the ID matches the stored ID in data
  if (id === data.id) {
    return;
  }

  // Check the validity of entered IDs
  const validIds = [];
  const values = id.split(',');
  values.forEach((val) => {
    const valNum = Number(val);
    if (!Number.isNaN(valNum) && valNum > 0 && valNum < 1281) {
      validIds.push(valNum);
    }
  });

  // Remove previous error messages
  if (errorText.parentElement) {
    errorText.parentElement.removeChild(errorText);
  }

  // Check if the user entered valid IDs
  if (validIds.length === 0) {
    errorText.innerText = 'Your IDs are not valid';
    dom.container.innerHTML = '';
    dom.container.append(errorText);
    return;
  }

  try {
    // Fetch and display individual Pokémon data
    dom.container.innerHTML = '';
    const pokemonPromises = validIds.map((ids) => getPokemon(ids));
    const pokemons = await Promise.all(pokemonPromises);

    pokemons.forEach((pokemonData) => {
      const pokemonDom = createPokemon(pokemonData);
      dom.container.append(pokemonDom);
    });
  } catch (error) {
    console.error(error);
    errorText.innerText = 'An error occurred while fetching data';
    dom.container.innerHTML = '';
    dom.container.append(errorText);
  }

  // Update stored ID in data
  data.id = id;
};

export default getPokemonHandler;