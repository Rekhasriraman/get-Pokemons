import createAbilities from "./createAbilities.js"

const createPokemon = (pokemonData) => {
 
//container
const pokemonContainer = document.createElement('div');
pokemonContainer.className = 'pokemon-card';
pokemonContainer.id = 'container';

// h2 tag for pokemon name
const title = document.createElement('h2');
title.innerText = pokemonData.name;
title.id = 'name';

//img tag for pokemon image
const image = document.createElement('img');
image.src = pokemonData.sprites.back_default;
image.alt = `${pokemonData.name} Image`;
image.id = 'img';

// create the h3 for abilities

const abilitiesHeader = document.createElement('h3');
abilitiesHeader.innerText = 'Abilities:';
const abilities = createAbilities(pokemonData.abilities);

pokemonContainer.append(title, image, abilitiesHeader, abilities);
return pokemonContainer;
}

export default createPokemon;