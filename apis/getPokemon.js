
const getPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
          }
          return await res.json();
    } catch (err) {
        console.error('Error fetching Pokémon data:', err);
        return
    }
};

export default getPokemon;