import getPokemonHandler from "../handlers/pokemonHandler.js";
import dom from "../dom.js"

const enterEventListener = () => {
dom.searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getPokemonHandler();
    }
});
}

export default enterEventListener;