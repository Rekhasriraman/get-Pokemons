import getPokemonHandler from "../handlers/pokemonHandler.js";
import dom from "../dom.js"

const clickEventListener = () => {
dom.searchBtn.addEventListener('click', getPokemonHandler)
};

export default clickEventListener;