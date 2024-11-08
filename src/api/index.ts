import axios from 'axios';

export const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    return [];
  }
};

export const getPokemonDetails = async (pokemonId: string) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    return null;
  }
};
